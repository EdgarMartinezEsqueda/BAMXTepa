
export default function Home() {
  return ( 
    <>
      <main>
        <section>
          <div className='w-1/2 mx-auto flex flex-wrap'>
            <h2 className='w-full'>Donativos economicos</h2>  
            <div className='w-full flex'>
              <h3 className='pr-2'>Banco: </h3>
              <h2>Ban Bajio</h2>
            </div>
            <div className='w-full flex'>
              <h3 className='pr-2'>CLABE: </h3>
              <h2>030396900023058415</h2>
            </div>
            <div className='w-full flex'>
              <h3 className='pr-2'>Numero de cuenta:</h3>
              <h2>0239321619201</h2>
            </div>
          </div> 
        </section>
        <form className='flex flex-col' action="submit">
          <h3>Quieres donar en especie contactanos:</h3>
          <label htmlFor="email">Correo</label>
          <input required className='w-1/3 border-double border-4' type="email" name="email" id="email" />
          <label htmlFor="message">Mensaje</label>
          <textarea required className='w-1/2 border-double border-4' name="message" id="message" ></textarea>
          <button className='w-1/5 border-solid border-2 rounded-lg' type="submit">Enviar mensaje</button>
        </form>
        <div id='donative'>
          
        </div>
      </main>
    </>
  )
}
