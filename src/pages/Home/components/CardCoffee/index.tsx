import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import { useState } from 'react'

import {
  CardTitleDescription,
  CoffeeCard,
  CounterAndButton,
  Price,
  SpecificationCoffeeContainer,
} from './styles'

interface ICardCoffeeProps {
  id: number
  img: string
  name: string
  tags: string[]
  description: string
  price: number
}

export function CardCoffee({
  id,
  img,
  name,
  tags,
  description,
  price,
}: ICardCoffeeProps) {
  const [quantity, setQuantity] = useState(1)

  function handleDecreaseQuantityButton() {
    event?.preventDefault()

    if (!(quantity <= 1)) {
      setQuantity(quantity - 1)
    }
  }

  function handleEncreaseQuantityButton() {
    event?.preventDefault()

    setQuantity(quantity + 1)
  }

  return (
    <CoffeeCard>
      <img src={img} alt="" />

      <SpecificationCoffeeContainer>
        <ul>
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </SpecificationCoffeeContainer>

      <CardTitleDescription>
        <h3>{name}</h3>

        <p>{description}</p>
      </CardTitleDescription>

      <footer>
        <Price>{price.toFixed(2)}</Price>

        <CounterAndButton>
          <form>
            <div>
              <button onClick={handleDecreaseQuantityButton}>
                <Minus width={14} weight="bold" />
              </button>

              {quantity}

              <button onClick={handleEncreaseQuantityButton}>
                <Plus width={14} weight="bold" />
              </button>
            </div>

            <button type="submit">
              <ShoppingCartSimple weight="fill" />
            </button>
          </form>
        </CounterAndButton>
      </footer>
    </CoffeeCard>
  )
}
