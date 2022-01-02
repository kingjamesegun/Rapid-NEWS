import Image from 'next/image';
import Link from 'next/link';


function article() {
    return (
        <div className="flex flex-col text-center m-2 md:m-6 p-2 md:p-8">
            <div className='px-2 md:px-10'>
                <div className="title font-sans font-semibold uppercase text-black text-xl md:text-2xl lg:text-3xl w-100 ">
                    Lauterbach und Union streiten über mutmaßliche Impfstofflücke
                </div>
                <div className='my-5 image'>
                <Image
                    src="/images/news2.jpg"
                    width="1500px"
                    height={700}
                    objectFit='cover'
                />
                </div>
                <div className='text-lg text-left font-mono '>
                    Berlin (Reuters) -   Die Kritik von Gesundheitsminister Karl Lauterbach (SPD) an einer vermeintlichen 
                    Knappheit bei Corona-Impfstoffen Anfang 2022 hat einen Streit über Versorgungslage und
                </div>
                <div className='text-base italic py-2'>
                    Reuters
                    <span className="text-blue  font-sans"> -Organization</span>
                </div>
                <div className='text-xs font-bold text-sky-500'>
                    <Link href="/">
                        <a>READ MORE</a>
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default article
