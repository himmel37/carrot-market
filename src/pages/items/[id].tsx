import type { NextPage } from "next";

const ItemDetail: NextPage = () => {
  return (
    <div className="m-5">
      <div className="mb-8">
        <div className="h-96 bg-slate-300" />
        <div className="flex border-b pb-3 mt-3 cursor-pointer items-center">
          <div className="w-12 h-12 bg-slate-300 rounded-full mr-3" />
          <div>
            <p className="text-sm font-medium text-gray-700">Steve Jebs</p>
            <p className="text-xs text-gray-500">View profile &rarr;</p>
          </div>
        </div>
        <div>
          <h1 className="font-bold text-3xl pt-3 text-gray-900">Galaxy S50</h1>
          <span className="text-3xl block py-3">$140</span>
          <p className="text-gray-700">
            My money&apos;s in that office, right? If she start giving me some
            bullshit about it ain&apos;t there, and we got to go someplace else
            and get it, I&apos;m gonna shoot you in the head then and there.
            Then I&apos;m gonna shoot that bitch in the kneecaps, find out where
            my goddamn money is. She gonna tell me too. Hey, look at me when
            I&apos;m talking to you, motherfucker. You listen: we go in there,
            and that ni**a Winston or anybody else is in there, you the first
            motherfucker to get shot. You understand?
          </p>
          <div className="flex pt-5 items-center justify-center space-x-2">
            <button className="text-white bg-orange-500 rounded-md py-2 px-5 w-full hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 font-medium focus:ring-orange-500">
              Talk to seller
            </button>
            <button className="text-gray-500 py-2 px-2 hover:bg-gray-300 rounded-md hover:text-white">
              <svg
                className="h-6 w-6 "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-2xl text-gray-900">Similar items</h2>
        <div className="grid grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((_, i) => (
            <div className="" key={i}>
              <div className="w-full h-56 mb-2 bg-slate-300" />
              <h3 className="text-gray-700 -mb-1">Galaxy S60</h3>
              <span className="text-sm font-medium text-gray-900">$6</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
