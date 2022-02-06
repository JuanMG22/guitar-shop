const Contacto = () => {
  return (
    <section className="w-full">
      <div className="h-96 bg-bottom bg-cover bg-[url('https://www.teahub.io/photos/full/48-485738_-contact-us.jpg')]"></div>
      <div className="max-w-5xl mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white w-full shadow rounded.md p-8 sm:p-12 -mt-72">
          <p className="text-3xl font-bold leading-7 text-center">
            Contactanos
          </p>
          <form
            name="contact-form"
            method="POST"
            data-netlify="true"
            action="/success"
          >
            <div className="md:flex items-center mt-12">
              <div className="w-full md:w-1/2 flex flex-col">
                <input type="hidden" name="form-name" value="contact-form" />
                <label className="font-semibold leading-none" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  name="nombre"
                  id="nombre"
                  type="text"
                  className="leading-none text-gray-900 p-3 focus:outline-none focus:border-gray-700 mt-4 bg-gray-50 border rounded border-gray-200"
                  required
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                <label
                  className="font-semibold leading-none"
                  htmlFor="telefono"
                >
                  Telefono
                </label>
                <input
                  name="telefono"
                  id="telefono"
                  type="phone"
                  className="leading-none text-gray-900 p-3 focus:outline-none focus:border-gray-700 mt-4 bg-gray-50 border rounded border-gray-200"
                  required
                />
              </div>
            </div>
            <div className="md:flex items-center mt-8">
              <div className="w-full flex flex-col">
                <label className="font-semibold leading-none" htmlFor="asunto">
                  Asunto
                </label>
                <input
                  name="asunto"
                  id="asunto"
                  type="text"
                  className="leading-none text-gray-900 p-3 focus:outline-none focus:border-gray-700 mt-4 bg-gray-50 border rounded border-gray-200"
                  required
                />
              </div>
            </div>
            <div>
              <div className="w-full flex flex-col mt-8">
                <label className="font-semibold leading-none" htmlFor="mensaje">
                  Mensaje
                </label>
                <textarea
                  name="mensaje"
                  id="mensaje"
                  type="text"
                  className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-gray-700 mt-4 bg-gray-50 border rounded border-gray-200"
                  required
                ></textarea>
              </div>
            </div>
            <div data-netlify-recaptcha="true"></div>
            <div className="flex items-center justify-center w-full">
              <button
                className="mt-9 font-semibold leading-none text-white py-4 px-10 bg-gray-700 hover:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none rounded-md"
                type="submit"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;
