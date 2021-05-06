// @ts-ignore
import {DataCell} from 'fixed-data-table-2';
import React from 'react';


class TextCell extends React.PureComponent<any> {
    render() {
        const {data, rowIndex, columnKey, ...props} = this.props;
        return (
            <DataCell {...props}>
                {data.getObjectAt(rowIndex)[columnKey]}
            </DataCell>
        );
    }
}

export {
    TextCell,
};