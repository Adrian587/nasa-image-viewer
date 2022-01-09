import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Images(props) {
    return (
        props.images.map((item, index) => (

            <Card key={index} sx={{ minWidth: 275, marginBottom: 1, marginTop: 2, maxWidth: 600 }}>
                <CardContent>
                    <Typography variant="caption" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {item.title} - {item.date}
                    </Typography>
                    <img src={item.url} className='card-image' alt={item.title} />
                    <Typography variant="h5" component="div">
                        Copyright: {item.copyright ? item.copyright : 'N/A'}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {item.explanation}
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
