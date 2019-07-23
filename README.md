# Carousel

This is a project to replicate the carousels that I have seen on npm packages in the simplest way possible.


It uses px for css so its not as responsive as I'd like but it is a good start.


Basic principle is that the wrapper slides left to right and the cards grow and shrink.  If all cards were full size they would be touching.

## How it works:
Here is the core the Carousel Component:

```html
<div className='carousel'>
    <div
        className='carousel__cards'
        style={{
            transform: `translateX(-${selected * 300}px`
        }}>
        {mappedCards}
    </div>
</div>
```

The inner 'carousel__cards' class is what slides.  Its moving to the left 300px based on the `selected` index, which is controlled by a simple state variable (used in a hook)
