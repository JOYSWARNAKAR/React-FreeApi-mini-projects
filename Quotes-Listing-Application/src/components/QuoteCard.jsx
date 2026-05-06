function QuoteCard({ quote }){

    return (
        <div className="card">
            <p>"{quote.content} "</p>
            <h4>- {quote.author} </h4>
        </div>
    )
}
export default QuoteCard;