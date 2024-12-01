import React from 'react'

function CheckOut() {
  return (
    <div>
         <div className="relative">
        <img
          className="h-60 w-full object-cover"
          src="https://s3-alpha-sig.figma.com/img/1461/f3d6/ff74c027a1888544144abe4be6e02cbf?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=V1k2~TI16jFkGQLu1hF6zQaqAEqLkM3RKvTzXNQj5UqhnvHscTHf6GDmGoXWpZzl4JMbzFpXs3ko8v-e-YGmNjoNamMKFBehhdv7Q2njuPu1YZnAp6e6bR4inQ~N0drYhkEnzHsdPoc3T2tvkoIfZs1cZ~r2mjdDh~ElcH~OwwLVmu7JukfTfoOkJdhn9X0RMMg0v36R6-DYy988H9z84fPkhVyFi1uCyZiK8g7dLPilqt1t3im8IzPyfTbCf8NUPCQE1nKe-EZ1SWkWdFMl~iYPkrjv2pj~YMKVWfI0FMX~dELlL2NEUjpWnn3xh9veXbX1fSiVQiVLbaqNBrqYNA__"
          alt="Cart Image"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-black bg-white bg-opacity-50">
          <img
            className="h-10 w-10"
            src="https://s3-alpha-sig.figma.com/img/2727/769b/a74736d502746301ed573ed8940fc322?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hKnHcKE5Lsm6d2ptkIrFTsXl5CDDRDCTdEU5xdqmFImz0-sCLxyoqPhICQ8Oxefj~FrXi8llAFo-u4yDPUXQe72Ubf1AUxxC8q8HZfywaWMrMuc3TgaAzxjPSiFEP92NAnSDfgcWorcLC~jE4deZJGwOmnUU-2BLEGOehDWjZROZBA4-iARULPUGeOg4yeuDv3QmIQjY68ifPHBp7maePBiMHihaadPI~7d7QmB6yaXaNoiCe~ur4Z4q4SWHQt9mW8Pn3l-Tb38K~KhIeirqDum3UZ6dPLRblfza-VkLkB~3GwX32LXYuIAmBPoYdj7lSDjnuvqAkxCi2IVomV2zpQ__" alt="" />
          <h1 className="text-3xl font-semibold">CheckOut</h1>
          <h1 className="text-sm text-black">Home › CheckOut</h1>
        </div>
      </div>

      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
  <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
    <div className="mx-auto max-w-5xl">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
      Billing details
      </h2>
      <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
        <form
          action="#"
          className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8"
        >
          <div className="mb-6 grid grid-cols-2 gap-4">
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="full_name"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                
                First Name
              </label>
              <input
                type="text"
                id="full_name"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder=""
                required=""
              />
            </div>
            <div className="col-span-2 sm:col-span-1">
              <label
                htmlFor="card-number-input"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
                
                Last Name
              </label>
              <input
                type="text"
                id="card-number-input"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pe-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500  dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder=""
                pattern=""
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="card-expiration-input"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
              Company Name (Optional)
              </label>
              <div className="relative">
              
                <input
                  id="card-expiration-input"
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder=""
                  required=""
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="card-expiration-input"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
              >
              Country / Region
              </label>
              <div className="relative">
                <input
                  type="text"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                  placeholder=""
                  required=""
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="cvv-input"
                className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white"
              >
               Street address
              </label>
              <input
                type="text"
                id=""
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder=""
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="cvv-input"
                className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white"
              >
             Town / City
              </label>
              <input
                type="text"
                id=""
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder=""
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="cvv-input"
                className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white"
              >
             Province
              </label>
              <input
                type="text"
                id=""
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder=""
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="cvv-input"
                className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white"
              >
             ZIP code
              </label>
              <input
                type="text"
                id=""
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder=""
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="cvv-input"
                className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white"
              >
              Phone
              </label>
              <input
                type="number"
                id=""
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder=""
                required=""
              />
            </div>
            <div>
              <label
                htmlFor="cvv-input"
                className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white"
              >
             Email address
              </label>
              <input
                type="text"
                id=""
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder=""
                required=""
              />
            </div>
            <div>
              <label
                className="mb-2 flex items-center gap-1 text-sm font-medium text-gray-900 dark:text-white"
              >
                Information
            
              </label>
              <input
                type="text"
                id=""
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Additional information"
                required=""
              />
            </div>
          </div>
        </form>
        <div className="mt-6 grow sm:mt-8 lg:mt-0">
          <div className="space-y-4 rounded-lg border border-gray-100 bg-gray-50 p-6 dark:border-gray-700 dark:bg-gray-800">
            <div className="space-y-2">
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-bold text-black">
                Product
                </dt>
                <dd className="text-base font-medium text-gray-900 dark:text-white">
                Asgaard sofa
                </dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal text-gray-950 dark:text-gray-400">
                Subtotal
                </dt>
                <dd className="text-base font-medium ">
                Rs. 250,000.00
                </dd>
              </dl>
              <dl className="flex items-center justify-between gap-4">
                <dt className="text-base font-normal  text-gray-950 dark:text-gray-400">
                Total
                </dt>
                <dd className="text-base font-medium total">
                Rs. 250,000.00
                </dd>
              </dl>
            </div>
            <dl className=" items-center  gap-4 border-t border-gray-200 pt-2 dark:border-gray-700">
              <dt className="text-base text-black">
             ● Direct Bank Transfer
              </dt>
              <dd className="text-base text-gray-400">
              Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
              </dd>
              <dd className=" cursor-pointer mt-5 text-gray-400 text-base">
              ◯      Direct Bank Transfer
                </dd>
              <dd className=" cursor-pointer mt-2 text-gray-400 text-base">
              ◯      Cash On Delivery
              </dd>
              <dd className=" mt-5 text-base">
              Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <span className='font-bold'>privacy policy.</span> 
              </dd>
            </dl>
          </div>
          <button
            className="flex mx-auto w-44 items-center justify-center text-center rounded-lg border mt-5 border-black  px-5 py-2.5 text-sm font-medium text-black "
          >
            Place order
          </button>
          <div className="mt-6 flex items-center justify-center gap-8">
            <img
              className="h-8 w-auto dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal.svg"
              alt=""
            />
            <img
              className="hidden h-8 w-auto dark:flex"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/paypal-dark.svg"
              alt=""
            />
            <img
              className="h-8 w-auto dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa.svg"
              alt=""
            />
            <img
              className="hidden h-8 w-auto dark:flex"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/visa-dark.svg"
              alt=""
            />
            <img
              className="h-8 w-auto dark:hidden"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard.svg"
              alt=""
            />
            <img
              className="hidden h-8 w-auto dark:flex"
              src="https://flowbite.s3.amazonaws.com/blocks/e-commerce/brand-logos/mastercard-dark.svg"
              alt=""
            />
          </div>
        </div>
      </div>
     
    </div>
  </div>
</section>




    </div>
  )
}

export default CheckOut