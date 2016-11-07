import React from 'react';

class AssetRecord extends React.Component {
  _placeAsset(e) {
    const { id, style_urls, display_name } = this.props.record;

    e.preventDefault();
    // would be nice to move all of this functionality into
    // a react component but for now we're going to hook into
    // the existing jQuery-powered stuff.
    $(e.currentTarget).trigger('assetPicked', {
      id: id,
      thumbnailPath: style_urls.thumbnail,
      mediumPath: style_urls.medium,
      originalPath: style_urls.original,
      filename: display_name
    });
  }
  render() {
    const { display_name, style_urls } = this.props.record;
    const classNames = ['record', 'record--card'];

    return (
      <li className={classNames.join(' ')}>
        <a
          href="#!"
          className="record__thumbnail"
          style={{ backgroundImage: `url(${style_urls.thumbnail})` }}
          onClick={(e) => this._placeAsset(e)} />

        <div className="record__details">
          <div className="record__title">
            {display_name}
          </div>
        </div>
      </li>
    );
  }
}

Tenon.RI.AssetRecord = AssetRecord;
