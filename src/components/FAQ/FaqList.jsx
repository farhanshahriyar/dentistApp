import {faqs} from '../../assets/data/faqs'
import FaqItems from './FaqItems'

const FaqList = () => {
  return (
    <ul className="mt-[38px]">
        {faqs.map((item, index) => (
            <FaqItems key={index} item={item} />
        ))}
    </ul>
  )
}

export default FaqList
