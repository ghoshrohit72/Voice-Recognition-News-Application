import React, {useState, useEffect, createRef} from 'react';
import  { Card , CardActions , CardActionArea, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import useStyles from './styles.js';
import classNames from 'classnames';
import Tilt from 'react-tilt';

const NewsCard = ({article: {description, publishedAt, source,title, url, urlToImage}, activeArticles, i}) => {
    const classes = useStyles();
    const [elRefs, setElRefs] = useState([]);
    

    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 90);

    useEffect(() => {
      window.scroll(0, 0);
  
      setElRefs((refs) => Array(20).fill().map((_, j) => refs[j] || createRef()));
    }, []);
  
    useEffect(() => {
      if (i === activeArticles && elRefs[activeArticles]) {
        scrollToRef(elRefs[activeArticles]);
      }
    }, [i, activeArticles, elRefs]);



    return (
        <div>
             <Tilt  className="Tilt br2">
            <Card ref={elRefs[i]} className={classNames(classes.card, activeArticles === i ? classes.activeCard : null )}>
            <CardActionArea href={url} target="blank">
            <CardMedia className={classes.media} image={ urlToImage || 'https://image.shutterstock.com/image-vector/breaking-news-background-planet-260nw-667420906.jpg' } />
            <div className={classes.details}>
                <Typography variant="body-2" color="textSecondary" component="h3">{ ( new Date(publishedAt)).toDateString() }</Typography>
                <Typography variant="body-2" color="textSecondary" component="h3"> {source.name} </Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>

            <CardContent>
                 <Typography variant="body-2" color="textSecondary" component="p">{description} </Typography>
            </CardContent>

        </CardActionArea>

        <CardActions className={classes.cardActions}>
            <Button szie="small" color="primary">Learn More</Button>
            <Typography variant="h5" color="textSecondary">{i+1}</Typography>
        </CardActions>

       </Card>
        </Tilt>
        </div>
       
       
    )

   
}

export default NewsCard;