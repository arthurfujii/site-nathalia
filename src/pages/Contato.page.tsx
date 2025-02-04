export const Contato = () => {
  return (
    <section>
      <h1 className="title">Contato</h1>
      <p>Entre em contato comigo através do formulário abaixo:</p>
      <form>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
        />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="message">Mensagem:</label>
        <textarea
          id="message"
          name="message"
        ></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};
