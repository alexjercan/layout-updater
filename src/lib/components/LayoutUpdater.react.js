import {Component} from 'react';
import PropTypes from 'prop-types';
import { isArray, isElement } from 'lodash';


// HELPER FUNCTIONS //
const plotlyRestyle = (graphDiv, layout_update) =>
    Plotly.update(graphDiv, {}, layout_update);

/**
 * LayoutUpdater is a component which updates the trace-data of a plotly graph.
 */
export default class LayoutUpdater extends Component {

    shouldComponentUpdate({updateData}) {
        return isArray(updateData);
    }

    render() {
        const {id, gdID, sequentialUpdate, updateData} = this.props;
        const idDiv = <div id={id}></div>;
        if (!this.shouldComponentUpdate(this.props)) {
            return idDiv;
        }

        // see this link for more information https://stackoverflow.com/a/34002028
        let graphDiv = document?.querySelectorAll('div[id*="' + gdID + '"][class*="dash-graph"]');
        if (graphDiv.length > 1) {
            throw new SyntaxError("LayoutUpdater: multiple graphs with ID=\"" + gdID + "\" found; n=" + graphDiv.length + " \n(either multiple graphs with same ID's or current ID is a str-subset of other graph IDs)");
        } else if (graphDiv.length < 1) {
            throw new SyntaxError("LayoutUpdater: no graphs with ID=\"" + gdID + "\" found");
        }

        graphDiv = graphDiv?.[0]?.getElementsByClassName('js-plotly-plot')?.[0];
        if (!isElement(graphDiv)) {
            throw new Error(`Invalid gdID '${gdID}'`);
        }

        // EXECUTION //
        plotlyRestyle(graphDiv, updateData[0]);

        return idDiv;
    }
}

LayoutUpdater.defaultProps = {
    sequentialUpdate: false,
};

LayoutUpdater.propTypes = {
    /**
     * The ID used to identify this component in Dash callbacks.
     */
    id: PropTypes.string,

    /**
     * The id of the graph-div whose traces should be updated.
     *
     * .. Note:
     *
     *   * if you use multiple graphs; each graph MUST have a unique id; otherwise we
     *     cannot guarantee that resampling will work correctly.
     *   * LayoutUpdater will determine the html-graph-div by performing partial matching
     *     on the "id" property (using `gdID`) of all divs with classname="dash-graph".
     *     It will select the first item of that match list; so if multiple same
     *     graph-div IDs are used, or one graph-div-ID is a subset of the other (partial
     *     matching) there is no guarantee that the correct div will be selected.
     */
    gdID: PropTypes.string.isRequired,

    /**
     * Bool indicating whether the figure should be redrawn sequentially (i.e.)
     * calling the restyle multiple times or at once.
     * (still needs to be determined which is faster has the lowest memory peak),
     * by default False.
     */
    sequentialUpdate: PropTypes.bool,

    /**
     * The data to update the graph with, must contain the `index` property for
     * each trace; either a list of dict-traces or a single trace
     */
    updateData: PropTypes.array,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

