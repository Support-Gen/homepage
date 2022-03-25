import { NextPage } from "next"

const pricingTiers = [
  {
    name: "Basic",
    price: 5
  },
  {
    name: "Startup",
    price: 25
  },
  {
    name: "Enterprise",
    price: 50
  },
]

const Price: NextPage = () => {
  return (
    <div>
      Pricing
    </div>
  )
}

export default Price;