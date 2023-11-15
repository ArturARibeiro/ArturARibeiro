import {
  Card, CardBody, CardHeader, CardTitle,
  Header,
  HeaderBanner,
  HeaderBody,
  HeaderUserInfo, HeaderUserLink, HeaderUserLinks,
  HeaderUserName,
  HeaderUserOccupation,
  HeaderUserPicture, HeaderUserTag, HeaderUserTags,
  Layout, Main
} from "./styles.ts";

const Home = () => {
  return <Layout>
    <Header>
      <HeaderBanner className="container-xxl p-0" src="https://media.licdn.com/dms/image/C4D16AQGvXrU4DLBeFA/profile-displaybackgroundimage-shrink_350_1400/0/1660259697985?e=1705536000&v=beta&t=rD19C8EVOmXT6un4DohMRTC1dUVZgFUYheYOEPztC4M"/>
      <HeaderBody className="container-xxl">
        <HeaderUserPicture src="https://avatars.githubusercontent.com/u/67174471"/>
        <HeaderUserInfo>
          <HeaderUserName>Artur A Ribeiro</HeaderUserName>
          <HeaderUserOccupation>Desenvolvedor Fullstack</HeaderUserOccupation>
          <HeaderUserTags>
            <HeaderUserTag>PHP</HeaderUserTag>
            <HeaderUserTag>Laravel</HeaderUserTag>
            <HeaderUserTag>Typescript</HeaderUserTag>
            <HeaderUserTag>Javascript</HeaderUserTag>
            <HeaderUserTag>React</HeaderUserTag>
            <HeaderUserTag>AWS</HeaderUserTag>
            <HeaderUserTag>Linux</HeaderUserTag>
          </HeaderUserTags>
        </HeaderUserInfo>

        <HeaderUserLinks>
          <HeaderUserLink href="">
            <i className="bi bi-linkedin"></i>
          </HeaderUserLink>
          <HeaderUserLink>
            <i className="bi bi-github"></i>
          </HeaderUserLink>
          <HeaderUserLink>
            <i className="bi bi-instagram"></i>
          </HeaderUserLink>
        </HeaderUserLinks>
      </HeaderBody>
    </Header>
    <Main className="container-xxl">
      <div className="row g-4">
        <div className="col-4 p-0">
          <div className="row g-2">
            <div className="col-12">
              <Card>
                <CardHeader>
                  <CardTitle>🤓 Skills</CardTitle>
                </CardHeader>
                <CardBody></CardBody>
              </Card>
            </div>
            <div className="col-12">
              <Card>
                <CardHeader>
                  <CardTitle>Dados Pessoais</CardTitle>
                </CardHeader>
                <CardBody>
                  <h6 className="h6 fw-bold m-0">Nome</h6>
                  <p>Artur Alves Ribeiro</p>

                  <h6 className="h6 fw-bold m-0">Idade</h6>
                  <p>21 anos</p>

                  <h6 className="h6 fw-bold m-0">Cargo atual</h6>
                  <p>Analista de Desenvolvimento Pleno</p>

                  <h6 className="h6 fw-bold m-0">Contato</h6>
                  <p><a href="mailto:arturalves.rib+portfolio@gmail.com" className="text-decoration-none">arturalves.rib@gmail.com</a></p>
                </CardBody>
              </Card>
            </div>
            <div className="col-12">
              <Card>
                <CardHeader>
                  <CardTitle>Serviços</CardTitle>
                </CardHeader>
                <CardBody>
                  <h6 className="h6 fw-bold">Desenvolvimento Web de Ponta a Ponta</h6>
                  <p>Transformo suas ideias em realidade digital. Desde a concepção até a implementação, trabalho no desenvolvimento de sites responsivos e aplicações web intuitivas que se adaptam perfeitamente a qualquer dispositivo, proporcionando uma experiência consistente para os usuários.</p>

                  <h6 className="h6 fw-bold">Integração e Otimização</h6>
                  <p>Além do desenvolvimento, especializo-me na integração de sistemas, criação de APIs e otimização de desempenho. Isso garante a comunicação perfeita entre diferentes plataformas e aprimora a velocidade e a eficiência de sites e aplicativos.</p>

                  <h6 className="h6 fw-bold">Segurança e Manutenção</h6>
                  <p>A segurança é uma prioridade. Implemento medidas de segurança de última geração para proteger dados sensíveis e garantir que os sistemas permaneçam resilientes contra possíveis ameaças. Além disso, ofereço serviços contínuos de manutenção para atualizações, correções de bugs e implementação de novos recursos.</p>

                  <h6 className="h6 fw-bold">Consultoria e Suporte</h6>
                  <p>Ofereço orientação técnica e estratégica para ajudar a tomar decisões informadas sobre tecnologias e arquiteturas ideais. Além disso, forneço treinamento e suporte técnico para garantir que as soluções desenvolvidas sejam utilizadas de maneira eficaz.</p>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-8">
          <div className="row g-2">
            <div className="col-12">
              <Card>
                <CardHeader>
                  <CardTitle>☝ Biografia</CardTitle>
                </CardHeader>
                <CardBody>
                  <p>Olá 👋! Sou o Artur, um Analista de Desenvolvimento Pleno apaixonado por programação e tecnologia.</p>

                  <p>Minha jornada como desenvolvedor começou em 2018, quando me matriculei em um curso técnico de desenvolvimento de sistemas. Desde então, tenho dedicado tempo e esforço para aprimorar minhas habilidades e alcançar o objetivo de trabalhar como desenvolvedor no exterior.</p>

                  <p>Em 2021, conquistei meu primeiro emprego como Analista de Desenvolvimento Júnior, uma oportunidade que me permitiu crescer e evoluir na área, especialmente com suporte do meu gestor.</p>

                  <p>Com o foco na programação web Full Stack, me especializei nas linguagens PHP e JS para criar ferramentas web robustas e eficazes, utilizando também o CSS para desenvolver layouts responsivos e agradáveis, proporcionando assim uma experiência do usuário aprimorada. Além disso, dediquei-me a aprender os frameworks Laravel e React, o que me permitiu desenvolver aplicações ainda mais sofisticadas.</p>

                  <p>Atualmente, sou Analista de Desenvolvimento Pleno na Worksphere, onde tenho a responsabilidade de projetar, desenvolver e manter sistemas baseados em PHP. Estou sempre ansioso para enfrentar novos desafios e continuar aprendendo mais e mais dessa área que eu amo atuar.</p>

                  <h6 className="h6 m-0">Principais Habilidades:</h6>
                  <p>
                    Linguagens: PHP, JS, Jquery, CSS, MySQL. <br/>
                    Frameworks: Zend, Laravel, React. <br/>
                    Outros: Git, AWS, PSR, Servidores Linux.
                  </p>
                </CardBody>
              </Card>
            </div>
            <div className="col-12">
              <Card>
                <CardHeader>
                  <CardTitle>Projetos</CardTitle>
                </CardHeader>
                <CardBody>
                  <div className="p-2 text-center">Tudo vazio por aqui</div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Main>
  </Layout>
}

export default Home;