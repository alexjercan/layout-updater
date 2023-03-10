# AUTO GENERATED FILE - DO NOT EDIT

#' @export
layoutUpdater <- function(id=NULL, data=NULL, gdID=NULL, initLayout=NULL) {
    
    props <- list(id=id, data=data, gdID=gdID, initLayout=initLayout)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'LayoutUpdater',
        namespace = 'layout_updater',
        propNames = c('id', 'data', 'gdID', 'initLayout'),
        package = 'layoutUpdater'
        )

    structure(component, class = c('dash_component', 'list'))
}
