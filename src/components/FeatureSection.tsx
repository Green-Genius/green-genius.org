import { Users, BarChart3, Shield, Calculator, FileText, Globe } from 'lucide-react';

const features = [
  {
    icon: Calculator,
    title: "Calcul d'Empreinte Carbone",
    description: "Calculez précisément l'empreinte carbone de vos activités professionnelles, logistiques, énergétiques. Interface intuitive pour une gestion d'entreprise optimale."
  },
  {
    icon: BarChart3,
    title: "Tableaux de Bord Analytiques",
    description: "Visualisez vos performances environnementales en temps réel, identifiez les zones d'amélioration. Tableaux de bord personnalisés pour votre prise de décision stratégique."
  },
  {
    icon: Users,
    title: "Gestion Multi-Entreprises",
    description: "Pour les consultants : gérez plusieurs clients depuis une seule plateforme. Suivi individualisé, rapports séparés et facturation centralisée."
  },
  {
    icon: FileText,
    title: "Hébergement de Rapports",
    description: "Stockage sécurisé et partage de vos rapports de bilan carbone. Accès permanent, liens de partage et archivage automatique pour vos clients."
  },
  {
    icon: Globe,
    title: "Domaine Personnalisé",
    description: "Consultants : utilisez votre propre nom de domaine (votrecabinet.com) avec marque blanche complète pour une image professionnelle renforcée."
  },
  {
    icon: Shield,
    title: "Données Sécurisées",
    description: "Vos données restent en Tunisie, hébergées localement. Chiffrement SSL, sauvegardes automatiques et conformité RGPD pour une sécurité maximale."
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative bg-gradient-to-b from-white to-gray-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">
            Une Solution Complète
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fini les multiples outils et classements.
            <strong>GreenGenius</strong> centralise tout ce dont votre entreprise a besoin pour gérer son <strong>impact carbone</strong> et optimiser ses ressources environnementales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-white/95 backdrop-blur-lg border border-black/10 p-8 rounded-2xl hover:bg-white hover:border-black/20 hover:-translate-y-2 transition-all duration-300 shadow-sm"
              >
                <div className="w-12 h-12 bg-greenly rounded-lg flex items-center justify-center mb-6">
                  <IconComponent className="w-6 h-6 text-black" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-black">{feature.title}</h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}