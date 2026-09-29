import React, { useState, useEffect } from 'react';
import { Cookie, Shield, Check, X, Settings2, ExternalLink } from 'lucide-react';
import './CookieBanner.css';

const COOKIE_STORAGE_KEY = 'unleash_cookie_consent_v1';

const defaultConsent = {
  necessary: true,
  analytics: false,
  marketing: false,
  decided: false,
  timestamp: null
};

const CookieBanner = ({ onOpenLegal, forceOpenSettings, onCloseSettings }) => {
  const [consent, setConsent] = useState(() => {
    try {
      const stored = localStorage.getItem(COOKIE_STORAGE_KEY);
      if (stored) {
        return JSON.parse(stored);
      }
    } catch (e) {
      console.warn('No se pudo leer localStorage para cookies', e);
    }
    return defaultConsent;
  });

  const [showBanner, setShowBanner] = useState(false);
  const [showSettingsModal, setShowSettingsModal] = useState(false);

  // Opciones temporales dentro del modal de configuración
  const [tempAnalytics, setTempAnalytics] = useState(false);
  const [tempMarketing, setTempMarketing] = useState(false);

  useEffect(() => {
    if (!consent.decided) {
      const timer = setTimeout(() => setShowBanner(true), 800);
      return () => clearTimeout(timer);
    }
  }, [consent.decided]);

  useEffect(() => {
    if (forceOpenSettings) {
      setTempAnalytics(consent.analytics);
      setTempMarketing(consent.marketing);
      setShowSettingsModal(true);
    }
  }, [forceOpenSettings, consent.analytics, consent.marketing]);

  const saveConsent = (analyticsVal, marketingVal) => {
    const newConsent = {
      necessary: true,
      analytics: analyticsVal,
      marketing: marketingVal,
      decided: true,
      timestamp: new Date().toISOString()
    };

    setConsent(newConsent);
    try {
      localStorage.setItem(COOKIE_STORAGE_KEY, JSON.stringify(newConsent));
    } catch (e) {
      console.warn('Error al guardar consentimiento', e);
    }

    // Despachar evento para activar/pausar scripts analíticos externos
    window.dispatchEvent(new CustomEvent('unleashConsentChanged', { detail: newConsent }));

    setShowBanner(false);
    setShowSettingsModal(false);
    if (onCloseSettings) onCloseSettings();
  };

  const handleAcceptAll = () => {
    saveConsent(true, true);
  };

  const handleRejectNonEssential = () => {
    saveConsent(false, false);
  };

  const handleOpenSettingsFromBanner = () => {
    setTempAnalytics(consent.analytics);
    setTempMarketing(consent.marketing);
    setShowSettingsModal(true);
  };

  const handleSaveSettings = () => {
    saveConsent(tempAnalytics, tempMarketing);
  };

  const handleCloseSettingsModal = () => {
    setShowSettingsModal(false);
    if (onCloseSettings) onCloseSettings();
  };

  return (
    <>
      {/* Banner Principal de Consentimiento */}
      {showBanner && !showSettingsModal && (
        <aside className="cookie-banner-container" aria-label="Aviso de cookies">
          <div className="container">
            <div className="cookie-banner-card">
              <div className="cookie-main-row">
                <div className="cookie-text-col">
                  <div className="cookie-badge-row">
                    <span className="cookie-icon-wrapper">
                      <Cookie size={18} />
                    </span>
                    <strong className="cookie-badge-title">Privacidad y Preferencias de Cookies</strong>
                  </div>
                  <p className="cookie-description">
                    En <strong>Unleash AI</strong> utilizamos cookies técnicas esenciales para el funcionamiento de la web, y cookies analíticas para medir el rendimiento de nuestros programas y catálogos. Puedes aceptar todas, rechazarlas o configurar tus preferencias. Más información en nuestra{' '}
                    <button 
                      type="button" 
                      onClick={() => onOpenLegal && onOpenLegal('cookies')}
                      className="cookie-inline-link"
                    >
                      Política de Cookies
                    </button>{' '}
                    y{' '}
                    <button 
                      type="button" 
                      onClick={() => onOpenLegal && onOpenLegal('privacidad')}
                      className="cookie-inline-link"
                    >
                      Política de Privacidad
                    </button>.
                  </p>
                </div>

                <div className="cookie-actions-group">
                  <button 
                    type="button" 
                    onClick={handleAcceptAll} 
                    className="btn-cookie btn-accept"
                  >
                    <Check size={16} />
                    <span>Aceptar Todas</span>
                  </button>

                  <button 
                    type="button" 
                    onClick={handleRejectNonEssential} 
                    className="btn-cookie btn-reject"
                  >
                    <X size={16} />
                    <span>Rechazar Opcionales</span>
                  </button>

                  <button 
                    type="button" 
                    onClick={handleOpenSettingsFromBanner} 
                    className="btn-cookie btn-settings"
                  >
                    <Settings2 size={16} />
                    <span>Configurar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Modal Granular de Configuración de Preferencias */}
      {showSettingsModal && (
        <div className="cookie-settings-overlay" onClick={handleCloseSettingsModal} role="dialog" aria-modal="true">
          <div className="cookie-settings-card" onClick={(e) => e.stopPropagation()}>
            <div className="settings-header">
              <div className="settings-header-title">
                <Shield size={22} className="shield-icon" />
                <h3>Centro de Preferencias de Cookies</h3>
              </div>
              <button 
                type="button" 
                onClick={handleCloseSettingsModal} 
                className="btn-close-settings"
                aria-label="Cerrar configuración"
              >
                <X size={20} />
              </button>
            </div>

            <p className="settings-intro">
              Personaliza qué tecnologías de almacenamiento permites en este sitio. Las cookies necesarias siempre permanecen activas para garantizar la seguridad de la navegación.
            </p>

            <div className="cookies-category-list">
              {/* Categoría 1: Necesarias */}
              <div className="cookie-cat-item">
                <div className="cat-info">
                  <div className="cat-title-row">
                    <strong>Cookies Técnicas y Esenciales</strong>
                    <span className="badge-mandatory">Siempre Activas</span>
                  </div>
                  <p className="cat-desc">
                    Requeridas para la navegación, seguridad de sesión, funcionamiento del menú interactivo y almacenamiento de su decisión de cookies. No pueden desactivarse.
                  </p>
                </div>
                <div className="cat-switch">
                  <input type="checkbox" checked disabled className="switch-input" aria-label="Cookies necesarias" />
                  <span className="switch-slider disabled"></span>
                </div>
              </div>

              {/* Categoría 2: Analíticas */}
              <div className="cookie-cat-item">
                <div className="cat-info">
                  <div className="cat-title-row">
                    <strong>Cookies de Rendimiento y Analítica</strong>
                    <span className="badge-optional">Opcional</span>
                  </div>
                  <p className="cat-desc">
                    Nos permiten cuantificar visitas y fuentes de tráfico para medir de forma anónima el interés en las Masterclasses y optimizar el rendimiento técnico.
                  </p>
                </div>
                <label className="cat-switch">
                  <input 
                    type="checkbox" 
                    checked={tempAnalytics} 
                    onChange={(e) => setTempAnalytics(e.target.checked)}
                    className="switch-input"
                    aria-label="Cookies analíticas"
                  />
                  <span className="switch-slider"></span>
                </label>
              </div>

              {/* Categoría 3: Marketing */}
              <div className="cookie-cat-item">
                <div className="cat-info">
                  <div className="cat-title-row">
                    <strong>Cookies de Marketing y Personalización</strong>
                    <span className="badge-optional">Opcional</span>
                  </div>
                  <p className="cat-desc">
                    Miden la conversión de campañas informativas y anuncios sobre convocatorias de nuevas Masterclasses o lanzamientos de proyectos digitales.
                  </p>
                </div>
                <label className="cat-switch">
                  <input 
                    type="checkbox" 
                    checked={tempMarketing} 
                    onChange={(e) => setTempMarketing(e.target.checked)}
                    className="switch-input"
                    aria-label="Cookies de marketing"
                  />
                  <span className="switch-slider"></span>
                </label>
              </div>
            </div>

            <div className="settings-footer-actions">
              <button 
                type="button" 
                onClick={handleRejectNonEssential} 
                className="btn-cookie btn-reject"
              >
                Rechazar Todas
              </button>
              <button 
                type="button" 
                onClick={handleSaveSettings} 
                className="btn-cookie btn-save-custom"
              >
                Guardar Preferencias
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieBanner;
