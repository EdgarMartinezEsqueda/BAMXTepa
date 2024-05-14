const BlogCard = (props) => {
    return (
        <article className="group md:basis-60 m-3">
            <img alt="IMG" src={ props.data.uri } className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]" />

            <div className="p-4">
                <a href={ props.data.redirect }>
                    <h3 className="text-lg font-medium text-gray-900 line-clamp-2">
                        {props.data.title}
                    </h3>
                </a>

                <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                    {props.data.field}
                </p>
            </div>
        </article>
    );
};

export default BlogCard;