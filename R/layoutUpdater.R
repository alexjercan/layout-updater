# AUTO GENERATED FILE - DO NOT EDIT

#' @export
layoutUpdater <- function(id=NULL, annotations=NULL, gdID=NULL, logscale=NULL) {
    
    props <- list(id=id, annotations=annotations, gdID=gdID, logscale=logscale)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LayoutUpdater',
        namespace = 'layout_updater',
        propNames = c('id', 'annotations', 'gdID', 'logscale'),
        package = 'layoutUpdater'
        )

    structure(component, class = c('dash_component', 'list'))
}
