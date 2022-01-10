import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Images(props) {
    const extractID = (url) => {
        const id = url.split('embed/')[1].substring(0, 11);
        return id;
    }
    return (
        props.images.map((item, index) => (
            <Card key={index} sx={{ minWidth: 275, marginBottom: 1, marginTop: 2, maxWidth: 600 }}>
                <CardContent>
                    <Typography variant="caption" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {item.title} - {item.date}
                    </Typography>
                    {item.url.includes('youtube') ?
                        <img src={`https://img.youtube.com/vi/${extractID(item.url)}/0.jpg`} className='card-image' alt={item.title} />
                        : <img src={item.url} className='card-image' alt={item.title} />}

                    <Typography variant="h5" component="div">
                        Copyright: {item.copyright ? item.copyright : 'N/A'}
                    </Typography>

                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {item.explanation}
                        {item.url.includes('youtube') ?
                            <div>
                                Video Link: <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a>
                            </div>
                            : null}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="primary" onClick={() => props.handleLike(item)}>
                        {!props.likedImages.some(likedItem => likedItem.date === item.date) ? 'Like' : 'Unlike'}
                    </Button>
                </CardActions>
            </Card>
        ))
    )
}

export default Images
