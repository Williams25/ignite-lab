import { useState, FormEvent } from "react";
import { Logo } from "../../components";
import { useNavigate } from "react-router-dom";
import { Spinner } from "phosphor-react";
import { useCreate_SubscriberMutation } from "../../graphql/generated";

export const Subscribe = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const navigate = useNavigate();

  const [createSubscriber, { loading }] = useCreate_SubscriberMutation();

  const handleSubscribe = async (e: FormEvent) => {
    e.preventDefault();
    const { data } = await createSubscriber({
      variables: {
        name,
        email
      }
    });

    if (data) {
      navigate("/event");
    }
  };

  return (
    <div className="w-full min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto gap-4">
        <div className="absolute top-20 left-0 h-[36rem] w-full bg-reactIcon bg-center bg-no-repeat z-0" />

        <div className="max-w-[640px] relative z-1">
          <Logo />
          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded relative z-1">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>

          <form
            className="flex flex-col gap-2 w-full overflow-hidden"
            onSubmit={handleSubscribe}
          >
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="text"
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="bg-gray-900 rounded px-5 h-14"
              type="email"
              placeholder="Digite seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {loading && (
              <div className="mt-4 w-full h-[52px] flex items-center justify-center animate-spin">
                <Spinner size={30} />
              </div>
            )}

            {!loading && (
              <button
                className="mt-4 bg-green-500 uppercase py-4 rounded font-bold text-sm hover:bg-green-700 transition-colors"
                type="submit"
              >
                Garantir minha vaga
              </button>
            )}
          </form>
        </div>
      </div>

      <img
        src="/src/assets/code.png"
        className="mt-10 relative z-1"
        alt="imagem da IDE de codigo visual studio code"
      />
    </div>
  );
};
