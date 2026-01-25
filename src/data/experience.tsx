import { BlurImage } from "@/components/ui/apple-cards-carousel";

export const EXPERIENCE_TIMELINE = [
  {
    title: "Final de 2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
          <strong>Início do estágio em Desenvolvimento Mobile.</strong> <br />
          Primeira experiência profissional com aplicações Android e iOS,
          atuando com React Native e participando de correções de bugs,
          melhorias contínuas e entendimento da arquitetura das aplicações.
        </p>
      </div>
    ),
  },

  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
          <strong>Consolidação como Desenvolvedor Mobile Júnior.</strong> <br />
          Desenvolvimento de novas funcionalidades em React Native utilizando
          JavaScript e TypeScript, além de participação ativa na migração de
          projetos React Native CLI para Expo, contribuindo para padronização,
          qualidade e melhoria do fluxo de desenvolvimento.
        </p>
      </div>
    ),
  },

  {
    title: "Início de 2025",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
          <strong>Produção e compartilhamento de conhecimento técnico.</strong>{" "}
          <br />
          Escrita de artigos e realização de palestras sobre boas práticas,
          princípios SOLID e desenvolvimento mobile, impulsionando a evolução
          técnica e refletindo diretamente no aumento da qualidade dos
          aplicativos desenvolvidos.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <BlurImage
            src="/images/bravo/section_1.jpeg"
            alt="experiência mobile"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
          />
          <BlurImage
            src="/images/bravo/section_2.jpeg"
            alt="experiência mobile"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
          />
          <BlurImage
            src="/images/bravo/section_3.jpeg"
            alt="experiência mobile"
            width={500}
            height={500}
            className="rounded-lg object-cover w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06)]"
          />
        </div>
      </div>
    ),
  },

  {
    title: "Final de 2025",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
          <strong>Promoção para Desenvolvedor Mobile Pleno.</strong> <br />
          Atuação com maior responsabilidade técnica, participação em decisões
          de arquitetura, foco em escalabilidade, qualidade de código,
          performance e segurança das aplicações mobile utilizando React Native,
          Expo e TypeScript.
        </p>
      </div>
    ),
  },

  {
    title: "Destaques",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-4">
          <strong>
            Principais responsabilidades e conquistas ao longo da minha
            trajetória como desenvolvedor mobile:
          </strong>
        </p>

        <div className="mb-8 space-y-2">
          <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ Desenvolvimento e manutenção de aplicações mobile Android e iOS
            em produção;
          </div>
          <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ Migração e padronização de projetos React Native CLI para Expo;
          </div>
          <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ Aplicação consistente de princípios SOLID e boas práticas de
            arquitetura;
          </div>
          <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ Atuação em melhorias de performance, segurança e experiência do
            usuário;
          </div>
          <div className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
            ✅ Compartilhamento de conhecimento técnico por meio de artigos e
            palestras.
          </div>
        </div>
      </div>
    ),
  },
];
