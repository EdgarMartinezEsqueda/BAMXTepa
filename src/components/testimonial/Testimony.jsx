import StarRateIcon from "@mui/icons-material/StarRate";

const Testimonials = (props) => {
    return (
      <blockquote className="rounded-lg bg-gray-100 p-8">
        <div className="flex items-center gap-4">
          <img alt="Person" src={ props.data.uri } className="h-16 w-16 rounded-full object-cover" />

          <div>
            <div className="flex justify-center gap-0.5 text-green-500">
              { [...Array( props.data.rating )].map((n, index) => <StarRateIcon className="!h-4 !w-4" key={` ${index} `} />) }
            </div>

            <p className="mt-1 text-lg font-medium text-gray-700">
              { props.data.name }
            </p>
          </div>
        </div>

        <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
          { props.data.testimony }
        </p>
      </blockquote>
    );
};

export default Testimonials;
