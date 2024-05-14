import AddIcon from '@mui/icons-material/Add';

const FAQ = ( props ) => {
    return (
      <details className="group border-l-4 border-verdelogo dark:border-rosaMexicano bg-gray-50 dark:bg-gray-600 p-6 [&_summary::-webkit-details-marker]:hidden" >
        <summary className="flex items-center justify-between cursor-pointer">
          <h2 className="text-lg font-black text-gray-900 dark:text-gris">
            { props.data.pregunta }
          </h2>

          <span className="ml-1.5 flex-shrink-0 rounded-full bg-white dark:bg-transparent p-1.5 text-gray-900 dark:text-white sm:p-3" >
            <AddIcon className="flex-shrink-0 w-5 h-5 transition !duration-300 group-open:-rotate-45" />
          </span>
        </summary>

        <p className="mt-4 leading-relaxed text-grisLogo dark:text-white font-semibold" >
          { props.data.respuesta }
        </p>
      </details>
    )
}

export default FAQ;