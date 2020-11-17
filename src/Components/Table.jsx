import React from 'react';

const Table = ({columns = [], data = []}) => {
    return (
        <table>
            <thead>
            <tr>
                {columns.map(col => {
                    return (
                        <th>
                            {col.label}
                        </th>
                    );
                })}
            </tr>
            </thead>
            <tbody>
            {data.map(d => {
                return (
                    <tr>
                        {columns.map(col => {
                            let name;
                            if (col.renderValue && col.renderValue instanceof Function)
                                name = col.renderValue(d);
                            else name = d[col?.name];
                            return <td>{name}</td>;
                        })}
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
};

export default Table;
