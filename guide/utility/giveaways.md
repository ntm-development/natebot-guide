# Giveaways Guide
The giveaways system is a very intuitive system that allows you to create and manage giveaways in your server.

To view the list of command, you will need to type **`/giveaway`**, and it will return a list of available commands.

![Giveaways Command List](./images/giveaways-commandlist.png)

## Creating Giveaways
To create a giveaway, you will need to run the **`/giveaway create`** command followed by a text channel, number of winners, prize and time. Then run the command to start the giveaway. You should get a success message like this:

![Giveaways Command List](./images/giveaway-createsuccess.png)

Now, users can enter the giveaway! Just simply click on the green **Enter This Giveaway** Button. A ephemeral response will send letting you know that you've been entered into the giveaway. Clicking it again will remove you from the giveaway.

![Giveaway Entry](./images/giveaway-enter.png)

When the time is up, the giveaway will automatically close and the winner will be selected by the bot. The system is designed to not be rigged, so the winner will be selected randomly.

## Editing Active Giveaways
You can modify an active giveaway's settings by running the **`/giveaway edit`** subcommand. Then select the command that you want to modify.

![Giveaway Edit List](./images/giveaway-editlist.png)

You will need to provide the Message ID of the giveaway you want to edit. The embed will edit with the new settings applied.

### Prize
To edit the prize of an active giveaway, run the **`/giveaway edit prize`** command.

![Giveaway Duration Edit](./images/giveaway-prizeedit.png)

### Duration
For the duration of the giveaway, you can run the **`/giveaway edit duration`** command. The duration will need to have a number followed by `m`, `h`, `d` and `w` as units. Minimum duration is 5 minutes.

![Giveaway Duration Edit](./images/giveaway-durationedit.png)

### Winners
To edit the number of winners, run the **`/giveaway edit winners`** command. There can be a maximum of 20 winners.

![Giveaway Winners Edit](./images/giveaway-winnersedit.png)

## Ending Giveaways
Want to end a giveaway? You can run the **`/giveaway end`** command followed by the Message ID of the giveaway.

![Giveaway Reroll](./images/giveaway-end.png)

## Rerolling Giveaways
If you want to reroll the giveaway to have a new winner, you can run the **`/giveaway reroll`** command followed by the Message ID of the giveaway. This will reroll the giveaway and send a message with one new winner.

![Giveaway Reroll](./images/giveaway-reroll.png)

## Viewing Giveaways
To view the list of active giveaways, you can run the **`/giveaway info`** command.

![Giveaway List](./images/giveaway-list.png)

Or if you want to get information about a specific giveaway, you can run the **`/giveaway info`** command. You will need to provide the giveaway ID which is a Discord Message ID (Snowflake).

![Giveaway Info](./images/giveaway-viewinfo.png)

## Notes
- Giveaways are checked every 1 minute and even if the bot restarts, the giveaway will still be checked.