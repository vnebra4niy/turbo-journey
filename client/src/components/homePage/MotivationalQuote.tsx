import React, { useState, useEffect } from 'react';

const MotivationalQuote: React.FC = () => {
    const [quote, setQuote] = useState<string>('');
    const [author, setAuthor] = useState<string>('');

    useEffect(() => {
        fetch('https://api.quotable.io/random')
            .then(response => response.json())
            .then(data => {
                setQuote(data.content);
                setAuthor(data.author);
            })
            .catch(error => console.error('Error fetching the quote:', error));
    }, []);

    return (
        <div className="motivational-quote">
            <blockquote>
                <p>{quote}</p>
                <footer>{author}</footer>
            </blockquote>
        </div>
    );
};

export default MotivationalQuote;