import React, {Component} from 'react';
import { Text, Image, View } from 'react-native';
import { CardSection, Card } from './common';


class ComingSoonMovieModel extends Component {


renderGenre = (genreArray) => {
  let obj=[];
 genreArray.map((genre, index) => {
    obj.push(<Text key={index} style={styles.genreStyle}>{genre}</Text>);
 });
 return obj;
}


  render() {
    const events = this.props.data;
    const { cardStyle, titleStyle, imageContainer, movieDetailsContainer, imageStyle, likeImage, genreStyle, ratingContainer, votesStyle, dateStyle, genreContainer } = styles;
    //debugger;
    return (
      <View style={cardStyle}>
        <CardSection>
          <View style={imageContainer}>
            <Image style={imageStyle} source={{uri:'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/' + events.ImageCode + '.jpg'}} />
          </View>
          <View style={movieDetailsContainer}>
            <Text style={titleStyle}>{events.EventTitle}</Text>
            <View style={ratingContainer}>
              <Image style={likeImage} source={require('./resources/images/ic_like.png')}></Image>
              <Text style={titleStyle}>99 % </Text>
              <Text style={votesStyle}>{events.Ratings} votes</Text>
            </View>
            <Text style={dateStyle}>{events.EventReleaseDate}</Text>
            <Text >{events.Language}</Text>
            <View style={styles.genreContainer}>
              {this.renderGenre(events.GenreArray)}
            </View>
          </View>
        </CardSection>
      </View>
    );
  }
};

const styles = {
  cardStyle:{
    marginTop: 10
  },
  imageContainer: {
    flex: 1,
    alignContent: 'stretch',
    padding: 2
  },
  imageStyle: {
    height: 130,
    width: 100,
    flex: 1,
    alignContent: 'stretch'
  },
  movieDetailsContainer: {
    flex: 2,
    flexDirection: 'column',
    paddingTop: 5,
    paddingBottom: 5,
    marginLeft: 5,
    position: 'relative'
  },
  titleStyle: {
    fontSize: 20,
    fontFamily: 'arial',
    fontWeight: 'bold'
  },
  ratingContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  likeImage: {
    width: 22,
    height: 20,
    marginRight: 10,
    alignItems: 'center',
  },
  votesStyle: {
    fontSize: 20,
    fontFamily: 'arial',
  },
  dateStyle: {
    fontSize: 20,
    fontFamily: 'arial',
    color: "#5BC199"
  },
  genreContainer: {
    flex: 1,
    marginTop: 10,
    flexDirection: 'row'
  },
  genreStyle: {
    borderWidth: 1,
    borderRadius: 10,
    paddingRight: 6,
    paddingLeft: 6,
    marginRight: 5,
    marginTop: 2,
    alignItems: 'center',
    borderColor: '#d1d1d1'
  }
};

export default ComingSoonMovieModel;
