
import{useState} from "react"
import Logo from "../../../assets/img/ck.jpg"


window.scrollTo(0,0)

const posts = [
    {
      id: 1,
      title: 'AU Credit Cards',
      href: '#',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      date: 'Mar 16, 2020',
      datetime: '2020-03-16',
      category: { title: 'Au credit card', href: '#' },
      author: {
        name: 'Creditklick team',
        role: 'Co-Founder / CTO',
        href: '#',
        imageUrl:
         Logo      },
    },
    {
        id: 2,
        title: 'IDFC Credit Cards',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Idfc first', href: '#' },
        author: {
          name: 'Creditklick team',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
         Logo   },
      },
      {
        id: 3,
        title: 'SBI Cards',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Yes Bank Credit card', href: '#' },
        author: {
          name: 'Creditklick team',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
          Logo  },
      },
      {
        id: 4,
        title: 'Yes Bank Credit Cards',
        href: '#',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'SBI Cards', href: '#' },
        author: {
          name: 'Creditklick team',
          role: 'Co-Founder / CTO',
          href: '#',
          imageUrl:
         Logo   },
      },
    // More posts...
  ]
  
  const CreditCardBlogs=()=> {
    const [loans, setLoans] = useState(false);
     const [creditcard, setCreditcard] = useState(false);
      const [score, setScore] = useState(false);
       const [need, setNeed] = useState(false);
        const [banking, setBanking] = useState(false);
         const [others, setOthers] = useState(false);
    return (
      <div className="bg-white ">
          {/* Navbar grid */}
           <div className="hidden lg:flex  mt-16 container mx-auto justify-center">
      <div onMouseLeave={() => setLoans(false)} className="relative mx-2 ">
        <button
          onMouseOver={() => setLoans(true)}
          className="flex items-center  p-2 bg-gray-200 rounded-md"
        >
          <span className="mr-2 text-blue-900">Loans</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
{/* https://larainfo.com/blogs/tailwind-css-dropdowns-menu-on-hover-example */}

        </button>
        <ul
          className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl ${
            loans ? "block" : "hidden"
          }`}
        >
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 1
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 2
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 3
          </li>
        </ul>
      </div>
 <div onMouseLeave={() => setCreditcard(false)} className="relative mx-2">
        <button
          onMouseOver={() => setCreditcard(true)}
          className="flex items-center  p-2 bg-gray-200 rounded-md"
        >
          <span className="mr-2 text-blue-900">Credit Card</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
{/* https://larainfo.com/blogs/tailwind-css-dropdowns-menu-on-hover-example */}

        </button>
        <ul
          className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl ${
            creditcard ? "block" : "hidden"
          }`}
        >
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 1
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 2
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 3
          </li>
        </ul>
      </div>
      <div onMouseLeave={() => setScore(false)} className="relative mx-2">
        <button
          onMouseOver={() => setScore(true)}
          className="flex items-center  p-2 bg-gray-200 rounded-md"
        >
          <span className="mr-2 text-blue-900">Cibil Score</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
{/* https://larainfo.com/blogs/tailwind-css-dropdowns-menu-on-hover-example */}

        </button>
        <ul
          className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl ${
            score ? "block" : "hidden"
          }`}
        >
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 1
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 2
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 3
          </li>
        </ul>
      </div>


      <div onMouseLeave={() => setNeed(false)} className="relative mx-2">
        <button
          onMouseOver={() => setNeed(true)}
          className="flex items-center  p-2 bg-gray-200 rounded-md"
        >
          <span className="mr-2 text-blue-900">Need</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
{/* https://larainfo.com/blogs/tailwind-css-dropdowns-menu-on-hover-example */}

        </button>
        <ul
          className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl ${
            need ? "block" : "hidden"
          }`}
        >
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 1
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 2
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 3
          </li>
        </ul>
      </div>



      <div onMouseLeave={() => setBanking(false)} className="relative mx-2">
        <button
          onMouseOver={() => setBanking(true)}
          className="flex items-center  p-2 bg-gray-200 rounded-md"
        >
          <span className="mr-2 text-blue-900">Banking</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
{/* https://larainfo.com/blogs/tailwind-css-dropdowns-menu-on-hover-example */}

        </button>
        <ul
          className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl ${
            banking ? "block" : "hidden"
          }`}
        >
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 1
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 2
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 3
          </li>
        </ul>
      </div>






      <div onMouseLeave={() => setOthers(false)} className="relative mx-2">
        <button
          onMouseOver={() => setOthers(true)}
          className="flex items-center  p-2 bg-gray-200 rounded-md"
        >
          <span className="mr-2 text-blue-900">Others</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
{/* https://larainfo.com/blogs/tailwind-css-dropdowns-menu-on-hover-example */}

        </button>
        <ul
          className={`absolute right-0 w-40 py-2 mt-2 rounded-lg shadow-xl ${
            others ? "block" : "hidden"
          }`}
        >
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 1
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 2
          </li>
          <li className="flex w-full items-center px-3 py-2 text-sm hover:bg-gray-100">
            Dropdown List 3
          </li>
        </ul>
      </div>




     
    </div> 
    

    <div className="lg:hidden">
            <label htmlFor="last-name" className="block text-lg font-semibold leading-6 text-gray-900">
          Categories
            </label>
            <div className="mt-2.5">
              {/* <input
                type="list"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              /> */}

<select id="cars"  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            name="carlist" form="carform">
  <option value="volvo">
    
    <ul>
      Loans
 
       
    </ul>
  </option>
  
  <option value="saab">Credit cards</option>
  <option value="opel">Credit Score</option>
  <option value="opel">All need of Credit Cards</option>
  <option value="opel">All About Banking</option>
  
  <option value="opel">Others</option>

</select>
            </div>
          </div>
    {/* Navbar Grid End */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32  lg:px-8">

        
     
    
             <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Credit Cards Blogs</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Learn here how to choose your best creditcard .
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="flex items-center gap-x-4 text-xs">
                  {/* <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time> */}
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.title}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                    {/* <p className="text-gray-600">{post.author.role}</p> */}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div></div>
      </div>
    )
  }
  export default CreditCardBlogs