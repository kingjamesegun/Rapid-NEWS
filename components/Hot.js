import HotCard from "./HotCard"
import hotStyles from '../styles/Hot.module.css'

function Hot({news, type}) {
    return (
        <div className={`hot container mt-12 py-5`}>
            {/* geographical */}
            <div className="grid  grid-cols-1 md:grid-cols-3  gap-4">
                <div>
                    {news.map(image =>(
                        <HotCard key={image.name} images={image} type={type}/>
                    ))}
                    {/* <HotCard/>
                    <HotCard/> */}
                </div>
                <div className={`col-span-2 m-3 ${hotStyles.hot__main}`}>
                    <div className="p-5">
                        <div className={`border-r-4 border-solid pt-2`}>
                            <div className={`font-sans text-white `}>
                                Paris
                            </div>
                            <p className={`font-sans text-xs text-white `}>
                                12th Oct, 2021.
                            </p>
                        </div>
                        <div className={`font-sans text-white text-5xl text-right p-6 ${hotStyles.hot__text}`}>
                            There are large protest in America
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hot
