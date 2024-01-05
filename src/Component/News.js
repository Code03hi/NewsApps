import React, { Component } from 'react'
import NewsItems from './NewsItems';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {

    static defaultProps = {
        name: "stranger",
        pageSize: 6,
        category: "general",
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    articles = []

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: true,
            page: 1,
            initalSize: 0,
        }
    }

    async updateData() {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=19f070fd3a1d4ade8f28a9660c7c7e84&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true,
        })
        let response = await fetch(url);
        let data = await response.json();
        this.setState({
            articles: data.articles,
            totalArticals: data.totalResults,
            loading: true,
        })
    }

    topic;
    i=0;

    handlePrevious = async () => {
        // if (!(this.state.page - 1 > Math.ceil(this.state.totalArticals / this.props.pageSize))) {
        //     let key = `0e2f5167cc724e6dab0ded60ea20203d`;
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${key}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        //     this.setState({
        //         loading: true,
        //     })
        //     let response = await fetch(url);
        //     let data = await response.json();
        //     this.setState({
        //         articles: data.articles,
        //         page: this.state.page - 1,
        //         loading: false,
        //     })
        // }
        this.setState({
            page: this.state.page - 1,
        });
        this.updateData();
    }

    handleNext = async () => {
        console.log(this.props.category);
        // console.log("Next");
        // if (!(this.state.page + 1 > Math.ceil(this.state.totalArticals / this.props.pageSize))) {
        //     let key = `0e2f5167cc724e6dab0ded60ea20203d`;
        //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=${key}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        //     this.setState({
        //         loading: true,
        //     })
        //     let response = await fetch(url);
        //     let data = await response.json();
        //     this.setState({
        //         articles: data.articles,
        //         page: this.state.page + 1,
        //         loading: false,
        //     })
        // }
        this.setState({
            page: this.state.page + 1,
        })
        this.updateData();
    }

    fetchMoreData = async () => {
        this.props.setProgress(0);
        this.setState({
            page: this.state.page + 1,
        });
        this.props.setProgress(20);
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apikey=19f070fd3a1d4ade8f28a9660c7c7e84&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let response = await fetch(url);
        this.props.setProgress(40);
        let data = await response.json();
        this.props.setProgress(60);
        this.setState({
            articles: this.state.articles.concat(data.articles),
            totalArticals: data.totalResults,
            initalSize: this.state.articles.length,
        })
        this.props.setProgress(100);
    };

    async componentDidMount() {
        this.updateData();
    }

    firstCharacterCapital = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        document.title = `${this.firstCharacterCapital(this.props.category)} - NewsMonkey`;
        this.topic = `${this.firstCharacterCapital(this.props.category)}`;
        return (
            <div>
                <>
                    <h1 className='text-center' style={{
                        marginTop: "90px",marginBottom: "30px"
                    }} >NewsMonkey's Top {`${this.topic}`} Headlines </h1>
                    {/* {this.state.loading && <Spinner />} */}
                    <InfiniteScroll
                        dataLength={this.state.articles.length}
                        next={this.fetchMoreData}
                        hasMore={this.state.articles.length !== this.state.initalSize}
                        loader={<Spinner />}
                    >
                        <div className="container">
                            <div className="row">
                                {this.state.articles.map((element) => {
                                    return <div className="col-md-4" key={!element.source.id? Math.floor(Math.random() * 100):`${element.source.id} + ${Math.floor(Math.random() * 100)}`} >
                                        <NewsItems title={element.title ? element.title.slice(0, 30) + " . . . ." : ""} description={element.description ? element.description.slice(0, 100) + " . . . ." : "White House says Tehran is providing Yemeni rebel group with weapons and tactical intelligence. . . . ."} imgurl={element.urlToImage ? element.urlToImage : ""} newsUrl={element.url} authorName={element.author} time={new Date(element.publishedAt).toGMTString()} source={element.source.name} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </InfiniteScroll>
                </>
            </div>
        )
    }
}
