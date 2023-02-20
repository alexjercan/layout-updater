import {Component} from 'react';
import PropTypes from 'prop-types';
import { isElement } from 'lodash';


// HELPER FUNCTIONS //
const plotlyRestyle = (graphDiv, annotations) =>
    Plotly.relayout(graphDiv, {annotations: annotations});

const plotlyReshape = (graphDiv, shapes) =>
    Plotly.relayout(graphDiv, {shapes: shapes});

/**
 * LayoutUpdater is a component which updates the annotations of a plotly graph.
 */
export default class LayoutUpdater extends Component {

    static #prevAnnotations = null;
    static #prevShapes = null;
    static #initLayout = {
        annotations: [],
        shapes: [],
    };

    shouldAnnotationsUpdate({annotations}) {
        return annotations !== undefined && LayoutUpdater.#prevAnnotations !== annotations;
    }

    shouldShapesUpdate({shapes}) {
        return shapes !== undefined && LayoutUpdater.#prevShapes !== shapes;
    }

    shouldInitUpdate({initLayout}) {
        return initLayout !== undefined;
    }

    render() {
        const {id, gdID, annotations, shapes, initLayout} = this.props;
        const idDiv = <div id={id}></div>;

        if (!this.shouldAnnotationsUpdate(this.props) && !this.shouldShapesUpdate(this.props) && !this.shouldInitUpdate(this.props)) {
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
        if (this.shouldAnnotationsUpdate(this.props)) {
            LayoutUpdater.#prevAnnotations = annotations;
            plotlyRestyle(graphDiv, annotations);
        }

        if (this.shouldShapesUpdate(this.props)) {
            LayoutUpdater.#prevShapes = shapes;
            plotlyReshape(graphDiv, shapes);
        }

        if (this.shouldInitUpdate(this.props)) {
            LayoutUpdater.#initLayout = initLayout;
        }

        return idDiv;
    }
}

LayoutUpdater.defaultProps = {
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
     * The data to update the graph with, it is a list containing the annotations
     */
    annotations: PropTypes.array,

    /**
     * The data to update the graph with, it is a list containing the shapes
     */
    shapes: PropTypes.array,

    /**
     * The initial layout of the component
     */
    initLayout: PropTypes.object,

    /**
     * Dash-assigned callback that should be called to report property changes
     * to Dash, to make them available for callbacks.
     */
    setProps: PropTypes.func
};

