// components
import Tabs from '@ui/Tabs';
import NFTAuthorItem from '@components/NFTAuthorItem';
import CollectionItem from '@components/CollectionItem';

const Items = ({author, withBorder, withButton}) => {
    return (
        <div className={`d-grid col-2 g-16 ${!withButton ? 'pb-16' : ''}`}>
            {
                author.items.map(((item, i) =>
                        <NFTAuthorItem key={item.id}
                                       index={i}
                                       item={item}
                                       withBorder={withBorder}
                                       withButton={withButton}/>
                ))
            }
        </div>
    );
}

const Collections = ({author, withBorder}) => {
    return (
        <div className="d-grid col-2 g-16">
            {
                author.collections.map(((item, i) =>
                        <CollectionItem key={item.id} index={i} item={item} withBorder={withBorder}/>
                ))
            }
        </div>
    );
}

const AuthorItems = ({author, withBorder, withButton, bg = 'body-bg', withPadding}) => {
    const tabs = [
        {label: 'Items', content: <Items author={author} withButton={withButton} withBorder={withBorder}/>},
        {label: 'Collections', content: <Collections author={author} withBorder={withBorder}/>},
    ];

    return  <Tabs tabs={tabs} bg={bg} withPadding={withPadding}/>
}

export default AuthorItems