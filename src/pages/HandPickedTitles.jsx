

function HandPickedTitles() {
  return (
    <div className="flex items-center flex-wrap justify-center gap-3">
      {Array.from({length:3}).map((_,index) => (
        <div className="w-96 mx-auto">
          <div className="relative overflow-hidden h-full rounded-2xl transition duration-200 group bg-white hover:shadow-xl border border-zinc-100">
            <div className="w-full aspect-w-16 aspect-h-10 bg-gray-100 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
              <img
                src={blogContent.image}
                alt="thumbnail"
                layout="fill"
                objectFit="cover"
                className="group-hover:scale-95 group-hover:rounded-2xl transform object-cover transition duration-200"
              />
            </div>
            <div className="p-4">
              <h2 className="font-bold my-4 text-lg text-zinc-700">
                {blogContent.title}
              </h2>
              <h2 className="font-normal my-4 text-sm text-zinc-500">
                {blogContent.description}
              </h2>
              <div className="flex flex-row justify-between items-center mt-10 w-full gap-3">
              <div className="text-center relative z-10 px-6 py-2 bg-white text-black border border-black font-bold rounded-xl block text-xs w-full">
                  contact
                </div>
                <div className="texet-center relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs w-full">
                  Read More
                </div>
              </div>
            </div>
          </div>
      </div>
      ))}
    </div>
  );
}

const blogContent = {
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: "https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp",
};



export default  HandPickedTitles