import { Link } from 'react-router-dom';
import { ArrowLeft, FileText } from 'lucide-react';

const LegalNoticePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-primary-green text-black px-4 py-2 rounded-full font-semibold mb-4">
              <FileText className="w-4 h-4" />
              Informations légales
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Mentions Légales
            </h1>
            <p className="text-xl text-gray-300">
              Informations légales relatives à la plateforme TAGGA
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Éditeur du Site</h2>
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <p className="text-gray-700 mb-2">
                    <strong>Raison sociale :</strong> TAGGA SAS
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Forme juridique :</strong> Société par Actions Simplifiée (SAS)
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Capital social :</strong> 50 000€
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Siège social :</strong> 123 Avenue de la République, 75011 Paris, France
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>SIRET :</strong> 123 456 789 00012
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>RCS :</strong> Paris B 123 456 789
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>N° TVA intracommunautaire :</strong> FR12 123456789
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Téléphone :</strong> +33 1 23 45 67 89
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Email :</strong>{' '}
                    <a href="mailto:contact@tagga.fr" className="text-primary-green hover:text-primary-green-dark">
                      contact@tagga.fr
                    </a>
                  </p>
                </div>

                <p className="text-gray-700 mb-2">
                  <strong>Directeur de la publication :</strong> Jean Dupont, Président
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Hébergement</h2>
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <p className="text-gray-700 mb-2">
                    <strong>Hébergeur :</strong> OVH SAS
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Siège social :</strong> 2 rue Kellermann, 59100 Roubaix, France
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Téléphone :</strong> +33 9 72 10 10 07
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Site web :</strong>{' '}
                    <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:text-primary-green-dark">
                      www.ovh.com
                    </a>
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Propriété Intellectuelle</h2>
                <p className="text-gray-700 mb-4">
                  L'ensemble du contenu de la plateforme TAGGA (structure, textes, logos, images, graphismes, icônes, sons, logiciels, etc.) est la propriété exclusive de TAGGA SAS ou de ses partenaires.
                </p>
                <p className="text-gray-700 mb-4">
                  Toute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit est interdite sans l'autorisation écrite préalable de TAGGA.
                </p>
                <p className="text-gray-700 mb-4">
                  Le non-respect de cette interdiction constitue une contrefaçon pouvant engager la responsabilité civile et pénale du contrefacteur.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">Marques</h3>
                <p className="text-gray-700 mb-4">
                  « TAGGA » ainsi que les logos et graphismes figurant sur le site sont des marques déposées. Toute reproduction ou représentation totale ou partielle de ces marques ou logos, seuls ou intégrés à d'autres éléments, sans l'autorisation expresse et préalable de TAGGA est prohibée.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Données Personnelles</h2>
                <p className="text-gray-700 mb-4">
                  TAGGA accorde une grande importance à la protection de vos données personnelles. Le traitement de vos données est effectué conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
                </p>
                <p className="text-gray-700 mb-4">
                  Pour plus d'informations sur la collecte et le traitement de vos données personnelles, veuillez consulter notre{' '}
                  <Link to="/privacy" className="text-primary-green hover:text-primary-green-dark font-semibold">
                    Politique de Confidentialité
                  </Link>.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">Responsable du traitement</h3>
                <p className="text-gray-700 mb-4">
                  TAGGA SAS, 123 Avenue de la République, 75011 Paris<br />
                  Email : privacy@tagga.fr
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">Vos droits</h3>
                <p className="text-gray-700 mb-4">
                  Conformément au RGPD, vous disposez d'un droit d'accès, de rectification, d'effacement, de limitation, de portabilité et d'opposition au traitement de vos données personnelles.
                </p>
                <p className="text-gray-700 mb-4">
                  Pour exercer ces droits, contactez-nous à : privacy@tagga.fr
                </p>
                <p className="text-gray-700 mb-4">
                  Vous pouvez également introduire une réclamation auprès de la CNIL :{' '}
                  <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:text-primary-green-dark">
                    www.cnil.fr
                  </a>
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
                <p className="text-gray-700 mb-4">
                  La plateforme TAGGA utilise des cookies pour améliorer l'expérience utilisateur et analyser l'utilisation du site.
                </p>
                <p className="text-gray-700 mb-4">
                  Un cookie est un petit fichier texte enregistré sur votre ordinateur ou appareil mobile lors de votre visite sur le site. Les cookies nous permettent de :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Mémoriser vos préférences et paramètres</li>
                  <li>Vous identifier lors de vos visites</li>
                  <li>Analyser l'utilisation et la performance du site</li>
                  <li>Personnaliser le contenu et les publicités</li>
                </ul>

                <h3 className="text-xl font-semibold mb-3 mt-6">Gestion des cookies</h3>
                <p className="text-gray-700 mb-4">
                  Vous pouvez à tout moment gérer vos préférences en matière de cookies via les paramètres de votre navigateur. La désactivation de certains cookies peut toutefois affecter le fonctionnement de la plateforme.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Limitation de Responsabilité</h2>
                <h3 className="text-xl font-semibold mb-3">6.1 Contenu du site</h3>
                <p className="text-gray-700 mb-4">
                  TAGGA s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur la plateforme. Toutefois, TAGGA ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">6.2 Disponibilité du site</h3>
                <p className="text-gray-700 mb-4">
                  TAGGA met tout en œuvre pour assurer la disponibilité et l'accessibilité de la plateforme 24h/24 et 7j/7. Toutefois, TAGGA ne peut garantir une disponibilité permanente et se réserve le droit d'interrompre, de suspendre momentanément ou de modifier sans préavis l'accès à tout ou partie de la plateforme.
                </p>

                <h3 className="text-xl font-semibold mb-3 mt-6">6.3 Service de mise en relation</h3>
                <p className="text-gray-700 mb-4">
                  TAGGA agit en qualité d'intermédiaire de mise en relation entre expéditeurs et voyageurs. La responsabilité de TAGGA ne saurait être engagée en cas de :
                </p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Non-respect des engagements par les utilisateurs</li>
                  <li>Perte, vol ou détérioration des enveloppes transportées</li>
                  <li>Retards ou annulations de trajets</li>
                  <li>Différends entre utilisateurs</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Liens Hypertextes</h2>
                <p className="text-gray-700 mb-4">
                  La plateforme TAGGA peut contenir des liens hypertextes vers d'autres sites internet. TAGGA n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>
                <p className="text-gray-700 mb-4">
                  La mise en place de liens hypertextes vers la plateforme TAGGA est soumise à l'autorisation préalable de TAGGA.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Droit Applicable et Juridiction</h2>
                <p className="text-gray-700 mb-4">
                  Les présentes mentions légales sont régies par le droit français.
                </p>
                <p className="text-gray-700 mb-4">
                  En cas de litige et à défaut d'accord amiable, le litige sera porté devant les tribunaux compétents de Paris, France.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Crédits</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Conception et développement :</strong> TAGGA SAS
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Cartographie :</strong> OpenStreetMap Contributors (
                  <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:text-primary-green-dark">
                    licence ODbL
                  </a>
                  )
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Paiement sécurisé :</strong> Stripe (
                  <a href="https://stripe.com" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:text-primary-green-dark">
                    stripe.com
                  </a>
                  )
                </p>
                <p className="text-gray-700 mb-4">
                  <strong>Icônes :</strong> Lucide Icons (
                  <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer" className="text-primary-green hover:text-primary-green-dark">
                    lucide.dev
                  </a>
                  )
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">10. Contact</h2>
                <p className="text-gray-700 mb-4">
                  Pour toute question concernant ces mentions légales, vous pouvez nous contacter :
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <strong>Par email :</strong>{' '}
                    <a href="mailto:legal@tagga.fr" className="text-primary-green hover:text-primary-green-dark">
                      legal@tagga.fr
                    </a>
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Par téléphone :</strong> +33 1 23 45 67 89
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Par courrier :</strong><br />
                    TAGGA SAS<br />
                    Service Juridique<br />
                    123 Avenue de la République<br />
                    75011 Paris, France
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">11. Date de Mise à Jour</h2>
                <p className="text-gray-700">
                  Les présentes mentions légales ont été mises à jour le 1er décembre 2025.
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t">
              <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                <Link
                  to="/"
                  className="inline-flex items-center gap-2 text-primary-green hover:text-primary-green-dark font-semibold"
                >
                  <ArrowLeft className="w-5 h-5" />
                  Retour à l'accueil
                </Link>

                <div className="flex flex-wrap gap-4 text-sm">
                  <Link to="/terms" className="text-gray-600 hover:text-primary-green">
                    CGU
                  </Link>
                  <Link to="/privacy" className="text-gray-600 hover:text-primary-green">
                    Confidentialité
                  </Link>
                  <Link to="/contact" className="text-gray-600 hover:text-primary-green">
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalNoticePage;
