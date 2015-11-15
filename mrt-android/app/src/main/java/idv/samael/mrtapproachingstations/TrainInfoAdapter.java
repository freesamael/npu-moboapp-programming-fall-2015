package idv.samael.mrtapproachingstations;

import android.content.Context;
import android.support.annotation.NonNull;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.SimpleAdapter;
import android.widget.TextView;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Adapter for binding {@link idv.samael.mrtapproachingstations.ApproachingTrains.TrainInfo}.
 */
public class TrainInfoAdapter extends BaseAdapter {
    private Context mContext;
    private List<ApproachingTrains.TrainInfo> mItems;


    public TrainInfoAdapter(@NonNull Context context) {
        mContext = context;
        mItems = new ArrayList<>();
    }

    public List<ApproachingTrains.TrainInfo> getItems() {
        return mItems;
    }

    @Override
    public int getCount() {
        return mItems.size();
    }

    @Override
    public ApproachingTrains.TrainInfo getItem(int position) {
        return mItems.get(position);
    }

    @Override
    public long getItemId(int position) {
        return position;
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
        if (convertView == null) {
            LayoutInflater inflater = (LayoutInflater) mContext.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
            convertView = inflater.inflate(R.layout.list_item_mrt, null);

            TextView station = (TextView) convertView.findViewById(R.id.text_station);
            TextView destination = (TextView) convertView.findViewById(R.id.text_destination);
            if (station != null) {
                station.setText(String.format(mContext.getString(R.string.fmt_text_station),
                        getItem(position).station));
            }
            if (destination != null) {
                destination.setText(String.format(mContext.getString(R.string.fmt_text_destination),
                        getItem(position).destination));
            }
        }

        return convertView;
    }
}
