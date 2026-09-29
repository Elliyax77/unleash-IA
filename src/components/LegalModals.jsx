import React, { useEffect } from 'react';
import { X, Shield, FileText, Lock, Cookie, Scale, Printer } from 'lucide-react';
import { legalData } from '../data/legalContent';
import './LegalModals.css';

const tabConfig = {
  avisoLegal: { icon: Scale, label: 'Aviso Legal' },
  privacidad: { icon: Lock, label: 'Privacidad' },
  cookies: { icon: Cookie, label: 'Cookies' },
  terminos: { icon: FileText, label: 'Términos & Masterclass' }
};

const LegalModals = ({ activeLegalDoc, onClose, onSwitchDoc }) => {
  // Manejo de tecla Escape y bloqueo de scroll del fondo
  useEffect(() => {
    if (!activeLegalDoc) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeLegalDoc, onClose]);

  if (!activeLegalDoc) return null;

  const currentDoc = legalData[activeLegalDoc];
  if (!currentDoc) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="legal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="legal-modal-container" onClick={(e) => e.stopPropagation()}>
        
        {/* Encabezado del Modal Legal */}
        <div className="legal-modal-header">
          <div className="legal-header-titles">
            <div className="legal-tag">
              <Shield size={14} />
              <span>CUMPLIMIENTO NORMATIVO Y LEGAL DIGITAL</span>
            </div>
            <h2 className="legal-doc-title">{currentDoc.title}</h2>
            <span className="legal-update-date">Última actualización: {currentDoc.lastUpdated}</span>
          </div>

          <div className="legal-header-actions">
            <button 
              type="button" 
              onClick={handlePrint}
              className="legal-print-btn"
              title="Imprimir documento legal"
              aria-label="Imprimir"
            >
              <Printer size={18} />
            </button>
            <button 
              type="button" 
              onClick={onClose} 
              className="legal-close-btn"
              aria-label="Cerrar modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Pestañas de navegación rápida entre documentos */}
        <div className="legal-tabs-bar" role="tablist">
          {Object.entries(tabConfig).map(([key, config]) => {
            const Icon = config.icon;
            const isActive = activeLegalDoc === key;
            return (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => onSwitchDoc && onSwitchDoc(key)}
                className={`legal-tab-btn ${isActive ? 'active' : ''}`}
              >
                <Icon size={16} />
                <span>{config.label}</span>
              </button>
            );
          })}
        </div>

        {/* Cuerpo del Documento Legal con scroll */}
        <div className="legal-modal-body">
          {currentDoc.sections.map((section, idx) => (
            <section key={idx} className="legal-section-block">
              <h3 className="legal-section-heading">{section.heading}</h3>
              <div className="legal-section-text">
                {section.content.split('\n\n').map((paragraph, pIdx) => (
                  <p key={pIdx}>
                    {paragraph.split('\n').map((line, lIdx) => (
                      <React.Fragment key={lIdx}>
                        {line}
                        {lIdx < paragraph.split('\n').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                ))}
              </div>
            </section>
          ))}

          {/* Sello de Garantía y Contacto Legal */}
          <div className="legal-footer-note">
            <Shield size={20} className="note-icon" />
            <p>
              Documentación legal redactada en cumplimiento con el RGPD, la Directiva ePrivacy, regulaciones de comercio electrónico y protección al consumidor de servicios tecnológicos y formación en IA. Para cualquier duda o requerimiento legal, escribe a{' '}
              <a href="mailto:contacto@unleash.com">contacto@unleash.com</a>.
            </p>
          </div>
        </div>

        {/* Barra inferior de cierre */}
        <div className="legal-modal-footer">
          <button type="button" onClick={onClose} className="btn-legal-close-footer">
            Entendido y Cerrar
          </button>
        </div>

      </div>
    </div>
  );
};

export default LegalModals;
