'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {

  const [product, setProduct] = useState('');
  const [hsCode, setHsCode] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (hsCode.trim()) {
      router.push(`/global-hs-code-list/hs-code-${hsCode.trim()}`);
    } else if (product.trim()) {
      router.push(`/global-hs-code-list/product-${product.trim()}`);
    } else {
      setError('Please enter HS Code or Product Name.');
    }
  };

  return (
    <section className="bg-gray-100 pt-24 px-4 sm:px-8">
      <div className=" mx-auto">
        
        <form
          onSubmit={handleSubmit}
          className=" p-6   flex  flex-col"
        >
            <div className='w-full flex flex-col md:flex-row gap-4'>
          <input
            type="text"
            placeholder="Enter product name"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            className="flex-1 bg-white px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
          />
          <input
            type="text"
            placeholder="Enter HS code"
            value={hsCode}
            onChange={(e) => setHsCode(e.target.value)}
            className="flex-1 bg-white px-4 py-3 border border-gray-300  focus:outline-none focus:ring-2 focus:ring-blue-600 text-gray-800"
          />
          <button
            type="submit"
            className="px-6 py-3 text-lg bg-blue-600 text-white font-semibold cursor-pointer  transition-all hover:scale-105 w-full md:w-auto"
          >
            Search
          </button>
          </div>
          <div>
{error && (
          <p className="text-red-600 mt-6  text-center font-medium">{error}</p>
        )}
          </div>
          
        </form>

        
      </div>
    </section>
  )
}

export default Search