const ProductComparison = () => {
  return (
    <div className="mt-20">
      <div className="relative container mx-auto">
        <img
          className="h-60 w-full object-cover"
          src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V1k2~TI16jFkGQLu1hF6zQaqAEqLkM3RKvTzXNQj5UqhnvHscTHf6GDmGoXWpZzl4JMbzFpXs3ko8v-e-YGmNjoNamMKFBehhdv7Q2njuPu1YZnAp6e6bR4inQ~N0drYhkEnzHsdPoc3T2tvkoIfZs1cZ~r2mjdDh~ElcH~OwwLVmu7JukfTfoOkJdhn9X0RMMg0v36R6-DYy988H9z84fPkhVyFi1uCyZiK8g7dLPilqt1t3im8IzPyfTbCf8NUPCQE1nKe-EZ1SWkWdFMl~iYPkrjv2pj~YMKVWfI0FMX~dELlL2NEUjpWnn3xh9veXbX1fSiVQiVLbaqNBrqYNA__"
          alt="Cart Image"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black bg-white bg-opacity-50">
          <h1 className="text-3xl font-semibold">Product Comparison</h1>
          <h1 className="text-sm text-black">Home › Comparison</h1>
        </div>
      </div>

      {/* product comparison */}

      {/*comparison end  */}

      <section className="text-gray-600 cartTotal body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                High Quality
              </h2>
              <p className="leading-relaxed">Crafted from top materials</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                Warranty Protection
              </h2>
              <p className="leading-relaxed">Over 2 years</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                Free Shipping
              </h2>
              <p className="leading-relaxed">Order over $150</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-gray-900">
                24 / 7 Support
              </h2>
              <p className="leading-relaxed">Dedicated support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductComparison;