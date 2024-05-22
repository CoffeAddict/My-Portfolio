export function Title ({text = 'Lorem Ipsum', elementType = 'h1', amount = 4}) {
    const Element = elementType

    const itemsArray = []

    for (let i = 0; i < amount; i++) {
        itemsArray.push(<span key={i} aria-hidden="true">{text}</span>);
      }

    return (
        <Element aria-label={text} content={text}>
            <div>{itemsArray}</div>
            <div>{itemsArray}</div>
        </Element>
    )
}