import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatTweet } from '../utils/helpers'

class Tweet extends Component{
    render(){
        const { tweet } = this.props

        if(tweet === null){
            return <div> This tweet doesn't exist</div>
        }

        console.log(this.props)
        return (
            <div></div>
        )
    }
}

function mapStateToProps({authedUser, users, tweets}, {id}){
    const tweet = tweets[id]
    const parentTweet = tweet ? tweets[tweet.replyingTo] : null
    return{
        authedUser,
        tweet: tweet
            ?formatTweet(tweet, users[tweet.author], authedUser)
            : null
    }
}

export default connect(mapStateToProps)(Tweet)