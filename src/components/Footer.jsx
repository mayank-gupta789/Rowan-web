import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="section-container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Link
              to="/"
              style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: '20px', letterSpacing: '0.01em' }}
              className="block text-foreground hover:text-primary transition-colors duration-200"
            >
              The Mirror™
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              An identity reclamation movement for women who have spent long enough carrying everyone else's world.
            </p>
          </div>

          <div>
            <p className="eyebrow mb-6">Navigate</p>
            <ul className="space-y-3">
              <li>
                <Link to="/mirror-index" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  The Index
                </Link>
              </li>
              <li>
                <Link to="/the-method" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  The Method
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/success-stories" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Stories
                </Link>
              </li>
              <li>
                <Link to="/book-call" className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200">
                  Apply
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="mono-label">№ 2026 The Mirror™</span>
          <div className="flex gap-6">
            <Link to="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">
              Privacy
            </Link>
            <Link to="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors duration-200">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
