const BlogCard = (props) => {
    return (
        <article className="group md:basis-60 m-3 max-w-60">
            <img alt="IMG" src={ props.data.uri } className="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]" />

            <div className="p-4">
                <a href={ props.data.redirect }>
                    <h3 className="text-lg text-gray-800 line-clamp-2 font-omnes font-light">
                        {props.data.content}
                    </h3>
                </a>
            </div>
        </article>
    );
};

export default BlogCard;