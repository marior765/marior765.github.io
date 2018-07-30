import React, { Component } from 'react';
import styled from 'styled-components';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const Container = styled.div`
    display: inline-flex;
    background: #f9f9f9;
    width: 1000px;
    flex-wrap:none;
`

class Dropdown extends Component {
    state = {
        type: '',
        color: '',
        swetest: '',
        country: '',
        sort: '',
        region: '',
        taste: '',
        value: ''
      };
    
      typeChange = event => {this.setState({ type: event.target.value })};
      colorChange = event => {this.setState({ color: event.target.value })};
      swetestChange = event => {this.setState({ swetest: event.target.value })};
      countryChange = event => {this.setState({ country: event.target.value })};
      sortChange = event => {this.setState({ sort: event.target.value })};
      regionChange = event => {this.setState({ region: event.target.value })};
      tasteChange = event => {this.setState({ taste: event.target.value })};
      valueChange = event => {this.setState({ value: event.target.value })};
    render() {
        const pad = {marginRight: '5%'}
        const width = {width: '100px'}
        return(
            <Container>
                <FormControl style={pad}>
                    <InputLabel>Тип</InputLabel>
                    <Select 
                        value={this.state.type}
                        style={width}
                        onChange={this.typeChange}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl style={pad}>
                    <InputLabel>Цвет</InputLabel>
                    <Select
                        value={this.state.color}
                        style={width}
                        onChange={this.colorChange}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl style={pad}>
                    <InputLabel >Сладкость</InputLabel>
                    <Select 
                        value={this.state.swetest}
                        style={width}
                        onChange={this.swetestChange}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl style={pad}>
                    <InputLabel>Страна</InputLabel>
                    <Select 
                        value={this.state.country}
                        style={width}
                        onChange={this.countryChange}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl style={pad}>
                    <InputLabel>Сорт</InputLabel>
                    <Select 
                        value={this.state.sort}
                        style={width}
                        onChange={this.sortChange}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl style={pad}>
                    <InputLabel>Регион</InputLabel>
                    <Select 
                        value={this.state.region}
                        style={width}
                        onChange={this.regionChange}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl style={pad}>
                    <InputLabel>Вкус</InputLabel>
                    <Select 
                        value={this.state.taste}
                        style={width}
                        onChange={this.tasteChange}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
                <FormControl style={pad}>
                    <InputLabel>Объем</InputLabel>
                    <Select 
                        value={this.state.value}
                        style={width}
                        onChange={this.valueChange}>
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </Container>
        )
    }
}

export default Dropdown;

/*
const dropdownArr = DropdownData.map((el,index) => {
    return (
        class {el} extends Component {
            state = {
                {el.state}: ''
            };

            handleChange = event => {
                this.setState({ {el.state}: event.target.value })
            };
            render() {
                <Container>
                    <FormControl style={pad}>
                    <InputLabel>{el.name}</InputLabel>
                        <Select 
                            value={this.state.{el.state}}
                            onChange={this.handleChange}>
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={el.value}>{el.type}</MenuItem>
                            <MenuItem value={el.value}>{el.type}</MenuItem>
                            <MenuItem value={el.value}>{el.type}</MenuItem>
                        </Select>
                    </FormControl>
                </Container>
            }
        }
    )
})
*/