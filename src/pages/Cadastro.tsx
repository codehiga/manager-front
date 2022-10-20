import { Dispatch, SetStateAction, useState } from "react";

export const Cadastro = () => {
  const [formularioAtual, setFormularioAtual] = useState<string>("cliente");
  const [dados, setDados] = useState({});

  function handleAlteraTexto(evt: any) {
    const value = evt.target.value;
    setDados({
      ...dados,
      [evt.target.name]: value,
    });
  }

  const forms = [
    {
      id: "cliente",
      componente: <ClienteForm setDados={handleAlteraTexto} />,
    },
  ];

  function enviaCadastro() {
    console.log(dados);
  }

  return (
    <div className="w-full h-full">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          enviaCadastro();
        }}
        className="flex flex-col gap-4"
      >
        <label className="flex flex-col">
          <p>Tipo de cadastro:</p>
          <select
            onChange={(e) => {
              setFormularioAtual(e.target.value);
              setDados(e);
            }}
            name="tipo"
            defaultValue="no"
            className="p-2 border"
          >
            <option defaultChecked value="no" disabled>
              Selecione um tipo de cadastro
            </option>
            <option value="cliente">Cliente</option>
            <option value="projeto">Projeto</option>
            <option value="categoria">Categoria</option>
            <option value="produto">Produto</option>
          </select>
        </label>

        {forms.map((form) => {
          if (form.id == formularioAtual) {
            return form.componente;
          }
        })}

        <button>Enviar</button>
      </form>
    </div>
  );
};

interface IFormProps {
  setDados: Dispatch<SetStateAction<any>>;
}

const ClienteForm = ({ setDados }: IFormProps) => {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-4">
      <label className="flex flex-col">
        <p>Representante:</p>
        <input
          name="representante"
          onChange={(e) => setDados(e)}
          type="text"
          className="p-2 border"
        />
      </label>

      <label className="flex flex-col">
        <p>E-mail:</p>
        <input
          name="email"
          onChange={(e) => setDados(e)}
          type="text"
          className="p-2 border"
        />
      </label>

      <label className="flex flex-col">
        <p>Telefone:</p>
        <input
          name="telefone"
          onChange={(e) => setDados(e)}
          type="text"
          className="p-2 border"
        />
      </label>
    </div>
  );
};
