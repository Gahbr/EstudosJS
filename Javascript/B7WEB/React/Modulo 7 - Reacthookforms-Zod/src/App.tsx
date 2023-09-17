/* eslint-disable @typescript-eslint/no-unused-vars */
import { SubmitHandler, useForm } from "react-hook-form";
import "./App.css";

type Inputs = {
  name: string;
  lastName: string;
  age: number;
};

const App = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();
  const handleFormSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <div className="container mx-auto my-4">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <input
          {...register("name", { required: true })}
          placeholder="digite seu nome"
          className="border border-black p-3 text-black"
        />
        {errors.name && (
          <p className="text-red-500">
            Esse item precisa ser preenchido corretamente!
          </p>
        )}

        <input
          {...register("lastName")}
          placeholder="digite seu sobrenome"
          className=" block mt-4 border border-black p-3 text-black"
        />
        <input
          type="number"
          {...register("age", { required: "Campo idade obrigatório", min: 18, max: 120 })}
          placeholder="digite sua idade"
          className=" block mt-4 border border-black p-3 text-black"
        />
        {errors.age && (
          <p className="text-red-500">
            {errors.age.message}
          </p>
        )}
        <input
          type="submit"
          value="Enviar"
          className="border border-black p-2 rounded"
        />
      </form>
    </div>
  );
};

export default App;
