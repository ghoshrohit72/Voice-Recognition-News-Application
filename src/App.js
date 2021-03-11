import React, { useState, useEffect } from 'react';

import wordsToNumbers from 'words-to-numbers';
import alanBtn from '@alan-ai/alan-sdk-web';

import NewsCards from './components/NewsCards/NewsCards';
import useStyles from './styles';

const App = () => {
  const [activeArticle, setActiveArticle] = useState(0);
  const [newsArticles, setNewsArticles] = useState([]);
  

  const classes = useStyles();

  useEffect(() => {
    alanBtn({
      key: '792b258c170b180d4ae5d5ac1a8fd6ba2e956eca572e1d8b807a3e2338fdd0dc/stage',
      onCommand: ({ command, articles, number }) => {
        if (command === 'newHeadlines') {
          setNewsArticles(articles);
          setActiveArticle(-1);
        } 
        else if (command === 'highlight') {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === 'open') {
          const parsedNumber = number.length > 2 ? wordsToNumbers((number), { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText('Please try that again...');
          } else if (article) {
            window.open(article.url, '_blank');
            alanBtn().playText('Opening...');
          } else {
            alanBtn().playText('Please try that again...');
          }
        }
      },
    });
  }, []);

  return (
    <div>
      <div className={classes.logoContainer}>
      
        <img src="https://i.ibb.co/VqQrT18/logo.png" className={classes.alanLogo} alt="logo" />
      </div>
      <NewsCards articles={newsArticles} activeArticle={activeArticle} />
     
    </div>
  );
};

export default App;