import './Variable.css';
import './LayoutGrid.css';
import './Theme.css';
import { Page } from './components/Page';
import { Button } from './components/Button';
import { Header } from './components/Header';
import { TopBar } from './components/TopBar';
import { SiteLogo } from './components/SiteLogo';
import { Footer } from './components/Footer';
import { FooterHelp } from './components/FooterHelp';
import { Link } from './components/Link';
import { Layout } from './components/Layout';
import { HeroBanner } from './components/HeroBanner';
import { SearchForm } from './components/SearchForm';
import { MovieCard } from './components/MovieCard';
import { Stack } from './components/Stack';
import  {MovieDetails} from './components/MovieDetails'
import  {Skeleton} from './components/Skeleton'
import  {EmptyState} from './components/EmptyState'
import {useState, useEffect} from 'react';
import {
  Tabs,
  Card,
  Badge,
  Modal,
  TextContainer,
  SkeletonDisplayText,
  SkeletonBodyText,
  Frame,
  Loading,
  Toast,
  Spinner
} from '@shopify/polaris';

const apiSettings = {
  apiURL: 'https://www.omdbapi.com/',
  apiKey: 'dc6083ad',
  contentType: 'movie'
} 

function App() {
  const [movieItems, setMovieItems] = useState([]);
  const [nominatedMovieItems, setNominatedMovieItems] = useState([]);
  const [movieId, setMovieId] = useState([]);
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selected, setSelected] = useState(0);
  const [loading, setLoading] = useState(false)
  const [isSpinning, setIsSpinning] = useState(false)
  const [activeToast, setActiveToast] = useState(false);
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [buttonLabel, setButtonLabel] = useState('nominate')


  const movieDataURL = `${apiSettings.apiURL}?type=${apiSettings.contentType}&apikey=${apiSettings.apiKey}`;

  useEffect(() => {
    fetch(movieDataURL + '&s=' + searchValue)
    .then(res => res.json())
    .then(data => {
      setTimeout(() => {
      data.Search && setMovieItems(data.Search)
    }, 500);
    })
    .catch(err =>{
      console.log(err)
    })
  }, [searchValue]) 

  /* const getMovieDataByMovieId = (movieId) =>{
    fetch(movieDataURL + '&i=' +  movieId)
    .then(res => res.json())
    .then(data => {
      setModalContent(data)
      console.log(modalContent, "yahoozee")
    })
  } */

 /*  const getMovieDataByMovieId = async (movieId) =>{
    const response = await fetch(movieDataURL + '&i=' +  movieId)
    const movies = await response.json();
    movies && setModalContent(movies)
  } */

   useEffect(() => {
    fetch(movieDataURL + '&i=' +  movieId)
    .then(res => res.json())
    .then(data => {
      data && setModalContent(data)
    })
    .catch(err =>{
      console.log(err)
    })
  }, [movieId]) 
  //const [active, setActive] = useState(true);

  //const button = useRef();

  //const handleChange = () => setModal(!modal);
  const handleModalChange = () => setModal(!modal);

  const toggleActive = () => setActiveToast(!activeToast);
  const toastMarkup = activeToast ? (
    <Toast content="Movie nominated" onDismiss={toggleActive} duration={4500} />
  ) : null;


  const spinner = isSpinning ? (
    <Spinner
      accessibilityLabel="Loading form field"
      size="small"
    />
  ) : null;

  const loader = loading ? (
    <Stack>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Stack>
  ) : null;

  const handleTabChange = (selectedTabIndex) =>{
    setSelected(selectedTabIndex);
    
  };
 

useEffect((event) => {
  setButtonLabel('nominate')
}, [buttonLabel]) 



  /* setTimeout(() =>{ 
    setIsLoading(false)}, 500); */
  const tabHeading = selected ? (<h2 className={'movie-card__heading'}> Nominations </h2>) : 'Movies';
  console.log(selected, 'kokokokokok')
  const moviesMarkup = loading ? 
    (<Stack>
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </Stack>
    ) : (
   <Stack>  
      {movieItems && movieItems.map(movieItem =>{
        
        const handleNominateBtn = (id, event) =>{
          event.preventDefault();
          setIsSpinning(true);
          setTimeout(() => {
            setDisabledBtn(!disabledBtn);
            const filteredMovie = movieItems.filter(filteredMovieItem => filteredMovieItem.imdbID === movieItem.imdbID )
            setNominatedMovieItems([...filteredMovie, ...nominatedMovieItems]);
            toggleActive()
            setIsSpinning(false);
          }, 1500);
        }

        return(
          <MovieCard
          key={movieItem.imdbID}
          {...movieItem}
          //activator={activator}
          >
            <Button id={movieItem.imdbID} primary fitted={'100%'}  disabled={disabledBtn} movieId={movieItem.imdbID} onClick={(event) => handleNominateBtn(movieItem.imdbID, event)}>{spinner} {' '} {buttonLabel}</Button>
            <Button secondary fitted={'100%'} onClick={()=>{
              handleModalChange()
              setMovieId(movieItem.imdbID)
            }}>more</Button>
          </MovieCard>
        )
      } )}
    </Stack>);

    const nominationsMarkup = (
    <Stack>
      {nominatedMovieItems && nominatedMovieItems.map(nominatedMovieItem =>{
        return(
         
          <MovieCard
          key={nominatedMovieItem.imdbID}
          {...nominatedMovieItem}
          //activator={activator}
          >
            <Button primary fitted={'100%'} disabled={false} onClick={() => {
               const remainingMovie = nominatedMovieItems.filter(filteredNominatedMovieItem => filteredNominatedMovieItem.imdbID !== nominatedMovieItem.imdbID)
               const filteredMovie = nominatedMovieItems.filter(filteredNominatedMovieItem => filteredNominatedMovieItem.imdbID === nominatedMovieItem.imdbID)
               setNominatedMovieItems([...remainingMovie]) 
               setMovieItems([...filteredMovie, ...movieItems])
            }}>remove</Button>
            <Button secondary fitted={'100%'} onClick={() => {
              handleModalChange()
              setMovieId(nominatedMovieItem.imdbID)
            }}>more</Button>

          </MovieCard>
          
        )
      })}
    </Stack>);

  const tabs = [
    {
      id: 'all-customers-fitted-3',
      content: (
        <span>
          Movies <Badge status="new">{movieItems ? movieItems.length : 0}</Badge>
        </span>
      ),
      accessibilityLabel: 'All customers',
      panelID: 'all-customers-fitted-content-3',
      results:  movieItems.length > 0 ? 
      (moviesMarkup)
      : 
      <EmptyState
      imageSrc={'https://cdn.shopify.com/s/files/1/2506/6936/files/movies-empty-state.svg?v=1609784787'}
      title={'Search for your favorite movie by name.'} 
      subTitle={'The search result will appear here'}
      buttonText={'search'}
      />
    },
    {
      id: 'accepts-marketing-fitted-3',
      content: (
        <span>
          Nominations <Badge status="new">{nominatedMovieItems ? nominatedMovieItems.length : 0}</Badge>
        </span>
      ),
      panelID: 'accepts-marketing-fitted-content-3',
      results: nominatedMovieItems.length > 0
      ?
      (nominationsMarkup)
      : 
      <EmptyState
      imageSrc={'https://cdn.shopify.com/s/files/1/2506/6936/files/nomination-empty-state-2.svg?v=1609785285'}
      title={'Your favorite movies deserve an award.'} 
      subTitle={'Nominate a movie and it will show up here.'}
      buttonText={'Nominate'}
      />
    },
  ];
  return (
    <Page narrowWidth>
      <Header>
        <TopBar>
          <SiteLogo
          imageSrc={'https://cdn.shopify.com/s/files/1/2506/6936/files/shoppies-logo.svg?v=1609786867'}
          pagelink={'/'}
          siteName={'Shoppies App'}
          />
        </TopBar>
      </Header>
      <main>
        <Layout label={'hero-wrapper'}>
         <HeroBanner
         megaTitle={'Nominate your favorite movies.'} 
         subTitle={'Popular keywords: Harry potter, Dracula, Spiderman...'}
         backgroundImageSrc={'https://cdn.shopify.com/s/files/1/2506/6936/files/shoppies-newbackground.png?v=1608732920'}
         >
           <SearchForm
           placeholder='Type movie title here...'
           value={searchValue}
           autoComplete={'off'}
           onChange={event =>{ 
             setSearchValue(event.target.value)
             setLoading(true);
              setTimeout(() => {
                return setLoading(false);
              }, 1500);
            }}
           //onSubmit={handleSearchSubmit}
            />
         </HeroBanner>
        </Layout>
        <Layout label={'movies-wrapper'}>
          <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange} fitted>
            <Card.Section>
              {tabHeading}
              {tabs[selected].results}
            </Card.Section>
          </Tabs>
          <Modal
            open={modal}
            onClose={handleModalChange}
            title={modalContent.Title}
            primaryAction={{
              content: 'Nominate',
              onAction: handleModalChange
            }}
          >
            <Modal.Section>
              <MovieDetails {...modalContent} />
            </Modal.Section>
          </Modal>
        </Layout>
        <Frame>{toastMarkup}</Frame>
      </main>
      <Footer>
        <FooterHelp>
          Learn more about {''}
          <Link link={'https://github.com/cyberwalley/shoppies-react'} external>Shoppies</Link>
        </FooterHelp>
      </Footer>
    </Page>
  );
}

export default App;
