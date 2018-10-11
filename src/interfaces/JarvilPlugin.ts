import { ResultItem } from "./ResultItem"

/**
 * 
 *
 * @export
 * @interface JarvilPlugin
 */
export default interface JarvilPlugin {
	/**
	 * the triggerword, that activates the plugin
	 * for example, the triggerword "g" would accomplish
	 * that only your plugin result items from "getResultItems"
	 * appear in the resultlist of jarvil, when the user inputs a
	 * "g" in the jarvil launcher. And all other plugins
	 * wouldn't be activated at this moment.
	 *
	 * @type {string}
	 * @memberof JarvilPlugin
	 */
	trigger: string

    /**
     * Only call plugin if it was exactly triggered by the input.
     *
     * @type {boolean}
     * @memberof JarvilPluginInterface
     */
	exact?: boolean

	/**
	 *
	 *
	 * @param {...Array<string>} args
	 * @returns {Array<ResultItem>}
	 * @memberof JarvilPlugin
	 */
	getResultItems(...args: Array<string>): Array<ResultItem>

	/**
	 * this method is executed when a [ResultItem](#ResultItem) is
	 * executed in the jarvil launcher.
	 *
	 * @param {string} actionId the actionid of the [ResultItem](#ResultItem) that is triggered
	 * @param {string} input the input without the plugin triggerword, for example if your
	 * 						 triggerword is `"g"` and the user types `"g hello"`, the parameter 
	 * 						 would be `"hello"`
	 * @memberof JarvilPlugin
	 */
	action(actionId: string, input: string): void
}