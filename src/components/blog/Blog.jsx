import BlogCard from "./BlogCard";

const Blog = () => {
    return (
      <div className="bg-bgClaro">
        <h2 className="text-center text-4xl font-bold tracking-tight sm:text-5xl pt-12">
            Nuestro Blog
          </h2>
        <div className="flex flex-wrap sm:w-4/5 w-full mx-auto justify-center items-center lg:px-0 px-4 lg:py-16 py-2 ">
            <BlogCard data = { {
              title: "Comienza el día con nuestro pan recién horneado", 
              field: "El pan recién horneado es la mejor manera de comenzar el día! Ven a nuestra panadería y prueba nuestros deliciosos panes frescos.",
              uri: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80",
              redirect: ""
            } } />
            <BlogCard data = { {
              title: "Postres y pasteles deliciosos para llevar a casa", 
              field: "¿Buscas un postre delicioso para llevar a casa? ¡Tenemos una gran variedad de pasteles y postres para satisfacer tus antojos!.",
              uri: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1926&q=80",
              redirect: ""
            } } />
            <BlogCard data = { {
              title: "Panes artesanales horneados a diario", 
              field: "¿Eres un amante del pan? ¡Entonces no puedes perderte nuestra selección de panes artesanales horneados a diario con ingredientes frescos y naturales!",
              uri: "https://images.unsplash.com/photo-1567042661848-7161ce446f85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1965&q=80",
              redirect: ""
            } } />
            <BlogCard data = { {
              title: "Regala una cesta de panes y dulces", 
              field: "¿Necesitas un regalo especial para alguien? ¡Nuestros cestas de regalo con panes y dulces recién horneados son la elección perfecta!",
              uri: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80",
              redirect: ""
            } } />
            <BlogCard data = { {
              title: "Prueba nuestro pan de masa madre para un sabor único e inolvidable", 
              field: "¿Te apetece algo diferente? ¡Prueba nuestro pan de masa madre, elaborado con ingredientes naturales y horneado a la perfección para un sabor único e inolvidable!",
              uri: "https://images.unsplash.com/photo-1608198093002-ad4e005484ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80",
              redirect: ""
            } } />
        </div>
      </div>
    );
};

export default Blog;
