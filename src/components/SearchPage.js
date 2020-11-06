import React from 'react';
import { Link } from 'react-router-dom';
import './SearchPage.css';

import Search from './Search';
import {useStateValue} from './StateProvider';
import useGoogleSearch from './useGoogleSearch';

import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function SearchPage() {

    const [{term}, dispatch] = useStateValue();

    const {data} = useGoogleSearch(term);

    // console.log(data);

    return (
        <div className="searchPage">
             <div className="searchPage__header">
                <Link to="https://rohandeysarkar.github.io/google-clone/">
                    <img
                        className="searchPage__logo"
                        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
                        alt=""
                    />
                </Link>

                <div className="searchPage__headerBody">
                    <Search hideButtons />

                    <div className="searchPage__options">
                        <div className="searchPage__optionsLeft">
                            <div className="searchPage__option">
                                <SearchIcon />
                                <Link to="https://rohandeysarkar.github.io/google-clone/search">All</Link>
                            </div>
                            <div className="searchPage__option">
                                <DescriptionIcon />
                                <Link to="https://rohandeysarkar.github.io/google-clone/search">News</Link>
                            </div>
                            <div className="searchPage__option">
                                <ImageIcon />
                                <Link to="https://rohandeysarkar.github.io/google-clone/search">Images</Link>
                            </div>
                            <div className="searchPage__option">
                                <LocalOfferIcon />
                                <Link to="https://rohandeysarkar.github.io/google-clone/search">shopping</Link>
                            </div>
                            <div className="searchPage__option">
                                <RoomIcon />
                                <Link to="https://rohandeysarkar.github.io/google-clone/search">maps</Link>
                            </div>
                            <div className="searchPage__option">
                                <MoreVertIcon />
                                <Link to="https://rohandeysarkar.github.io/google-clone/search">more</Link>
                            </div>
                        </div>

                        <div className="searchPage__optionsRight">
                            <div className="searchPage__option">
                                <Link to="https://rohandeysarkar.github.io/google-clone/search">Settings</Link>
                            </div>
                            <div className="searchPage__option">
                                <Link to="https://rohandeysarkar.github.io/google-clone/search">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {term && (
                <div className="searchPage__results">
                    <p className="searchPage__resultCount">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    {data?.items.map(item => (
                        <div className="searchPage__result">
                            <a className="searchPage__resultLink" href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img 
                                        className="searchPage__resultImage"
                                        src={item.pagemap?.cse_image[0]?.src}
                                        alt=""
                                    />
                                )}
                                {item.displayLink}
                            </a>
                            <a className="searchPage__resultTitle" href={item.link}>
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage__resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
};

export default SearchPage